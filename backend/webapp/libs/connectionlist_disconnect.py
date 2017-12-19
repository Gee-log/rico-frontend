"""connectionlist create disconnection
"""
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
logger = logging.getLogger('connectionlist_disconnection')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionlist_disconnection.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class CreateDisconnect(object):

    @staticmethod
    def validate_input_to_create_disconnection(request):
        """Disconnection Process

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

        logger.info('validate_input_to_create_disconnection method: request data: {}'.format(request.data))

        # validate input
        if east is None:
            logger.error('validate_input_to_create_disconnection method: error: no east port number {}, request: {}'
                         .format(east, request))
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            logger.error('validate_input_to_create_disconnection method: error: no west port number {}, request: {}'
                         .format(west, request))
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create disconnection
        CreateDisconnect.create_disconnect(request, east, west, username)

        logger.info('validate_input_to_create_disconnection method: return data: {}'.format(request.data))
        return Response(request.data, status=status.HTTP_201_CREATED)

    @staticmethod
    def create_disconnect(request, east, west, username):
        """Create disconnection in database

        Args:
            request: request data
            east(object): east's port from get_available_ports()
            west(object): west's port from get_available_ports()
            username (string): username from post method
        """

        # query for delete disconnected pair
        connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
        connections_disconnected_pair.delete()

        # query for check this pair are connected or not
        check_pair_connected = Connection.objects.filter(east=east, west=west, status='success')

        if check_pair_connected is None:
            logger.error('Query for check this pair are connected method: error: not found this connected pair, ' 
                         'east port: {}, west port: {}'.format(east, west))
            return JsonResponse({'status': 'error', 'error': 'These port {} {} does not exist'.format(east, west)})

        connections = Connection.objects.filter(east=east, west=west, status='success').exclude(connected_date=None)
        connections.update(status='pending')
        connectionhistorys = ConnectionHistory.objects.create(east=east, west=west, switching_type='D', status='pending',
                                                              username=username)
        connectionhistorys.save()

        # validate input
        if 'stops' in request.data:
            stops = request.data['stops']
        else:
            stops = None

        if stops:
            payload = {'east': east.number, 'west': west.number, 'action': "disconnect", 'stops': stops}
        else:
            payload = {'east': east.number, 'west': west.number, 'action': "disconnect"}

        # validate using dummy
        if walk.is_dummy():
            resp = walk.disconnect(payload)
        else:
            resp = requests.post(CELERY_APP + '/disconnect', data=payload)

        uuid = resp.text
        operations = Operation.objects.all()
        robotnumber = ''

        robots = Robot.objects.all()
        for r in robots:
            robotnumber = r.robot_number

        if stops:
            logger.info('create_disconnection method: east port: {}, west port: {}, uuid: {}, stops: {}'
                        .format(east.number, west.number, uuid, stops))
        else:
            logger.info('create_disconnection method: east port: {}, west port: {}, uuid: {},'
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

        # check disconnection was created
        check_disconnection = Connection.objects.filter(east=east, west=west, status=['pending', 'started'],
                                                        disconnected_date=None)
        if check_disconnection is None:
            # query for delete disconnected pair
            logger.error('create_disconnection method: error: disconnection does not create, east port: {}, '
                         'west port: {}'.format(east, west))

            # create disconnection
            disconnections = Connection.objects.filter(east=east, west=west, disconnected_data=None)
            disconnections.update(status='pending')
