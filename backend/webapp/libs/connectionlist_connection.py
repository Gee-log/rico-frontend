"""connectionlist create connection
"""
import ctypes
import logging.handlers
import requests

from django.db.models import F
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs.get_available_port import GetAvailablePort
from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory, Port, Robot
from webapp.views import walk, CELERY_APP

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionlist_connection')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionlist_connection.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class CreateConnection(object):

    @staticmethod
    def validate_input_to_create_connection(request):
        """Connection Process

                Args:
                    request: request data
                    request['east'](string): east port number
                    request['west'](string): west port number
                    request['action'](string): connection type
                    request['stops'](string): stop sequences debug mode

                Returns:
                    json:
                        east (string): east port number
                        west (string): west port number
                        status (string): status code
                        action (string): action type
                """

        username = request.data['username']
        east, west = GetAvailablePort.get_available_port(request)

        logger.info('validate_input_to_create_connection method: request data: {}'.format(request.data))

        # validate input
        if east is None:
            logger.error('validate_input_to_create_connection method: error: no east port number {}, request: {}'
                         .format(east, request))
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            logger.error('validate_input_to_create_connection method: error: no west port number {}, request: {}'
                         .format(west, request))
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create connection
        CreateConnection.create_connect(request, east, west, username)

        logger.info('validate_input_to_create_connection method: return data: {}'.format(request.data))
        return Response(request.data, status=status.HTTP_201_CREATED)

    @staticmethod
    def create_connect(request, east, west, username):
        """Create connection in database

        Args:
            request: request data
            east(object): east's port from connection()
            west(object): west's port from connection()
            username(string): username who's create connection
        """
        # query for delete disconnected pair
        connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
        connections_disconnected_pair.delete()

        if connections_disconnected_pair:
            for i in connections_disconnected_pair:
                logger.error('Query for delete disconnected pair method: error: method does not work, connection object'
                             ': {}'.format(connections_disconnected_pair))
                connection_obj = Connection.objects.filter(east=i.east, west=i.west)
                connection_obj.delete()

        if Connection.objects.filter(east=east, west=west):
            logger.error('Filter used port method: These port {} {} already used'.format(east, west))
            return JsonResponse({'status': 'error', 'error': 'These port {} {} already used'.format(east, west)})

        elif Connection.objects.filter(east=east):
            logger.error('Filter used port method: This east port {} already used'.format(east))
            return JsonResponse({'status': 'error', 'error': 'This east port {} already used'.format(east)})

        elif Connection.objects.filter(west=west):
            logger.error('Filter used port method: This west port {} already used'.format(west))
            return JsonResponse({'status': 'error', 'error': 'This west port {} already used'.format(west)})

        connections = Connection.objects.create(east=east, west=west, status='pending')
        connections.save()
        connectionhistorys = ConnectionHistory.objects.create(east=east, west=west, switching_type='C', status='pending',
                                                              username=username)
        connectionhistorys.save()

        # validate input
        if 'stops' in request.data:
            stops = request.data['stops']
        else:
            stops = None

        if stops:
            payload = {'east': east.number, 'west': west.number, 'action': "connect", 'stops': stops}
        else:
            payload = {'east': east.number, 'west': west.number, 'action': "connect"}

        # validate using dummy
        if walk.is_dummy():
            resp = walk.connect(payload)
        else:
            resp = requests.post(CELERY_APP + '/connect', data=payload)

        uuid = resp.text
        operations = Operation.objects.all()
        robotnumber = ''

        robots = Robot.objects.all()
        for r in robots:
            robotnumber = r.robot_number

        if stops:
            logger.info('create_connection method: east port: {}, west port: {}, uuid: {}, stops: {}'
                        .format(east.number, west.number, uuid, stops))
        else:
            logger.info('create_connection method: east port: {}, west port: {}, uuid: {},'
                        .format(east.number, west.number, uuid))

        if len(operations) > 0:
            operations.delete()
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()
        else:
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()

        operationhistorys = OperationHistory.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                            request=str(payload))
        operationhistorys.save()

        # connection counter
        east_connection_counter = ''
        west_connection_counter = ''
        east_ports = Port.objects.all().filter(direction='E', number=str(east.number))
        west_ports = Port.objects.all().filter(direction='W', number=str(west.number))
        east_ports.update(connection_counter=F('connection_counter') + 1)
        west_ports.update(connection_counter=F('connection_counter') + 1)

        for e in east_ports:
            east_connection_counter = e.connection_counter

        for w in west_ports:
            west_connection_counter = w.connection_counter

        logger.info('create_connection method: connection_counter east port: {}, count: {}, west port: {}, count: {}'
                    .format(east, east_connection_counter, west, west_connection_counter))

        # check connection was created
        check_connection = Connection.objects.filter(east=east, west=west)
        if check_connection is None:
            # query for delete disconnected pair
            logger.error('create_connection method: error: connection does not create, east port: {}, west port: {}'
                         .format(east, west))
            connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
            connections_disconnected_pair.delete()

            ctypes.windll.user32.MessageBoxW(0, check_connection, "connection does not created", 1)

            # create connection
            connections = Connection.objects.create(east=east, west=west, status='pending')
            connections.save()
