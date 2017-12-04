"""connectionlist create connection
"""
import ctypes
import logging.handlers
import requests

from django.db.models import F
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs import get_available_port
from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory, Port, Robot
from webapp.views import walk, CELERY_APP

# set get_available_ports
get_available_ports = get_available_port.GetAvailablePort

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

                Returns:
                    json:
                        east (string): east port number
                        west (string): west port number
                        status (string): status code
                        action (string): action type
                """

        username = request.data['username']
        east, west = get_available_ports.get_available_port(request)
        logger.info('connection %s - %s', east, west)

        # Validate input
        if east is None:
            logger.error('connection: error:no east port number {} request:{}'.format(east, request))
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            logger.error('connection: error:no west port number {} request:{}'.format(west, request))
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create connection
        CreateConnection.create_connect(request, east, west, username)

        return Response(request.data, status=status.HTTP_201_CREATED)

    @staticmethod
    def create_connect(request, east, west, username):
        """Create connection in database

        Args:
            request: request data
            east(string): east's port from connection()
            west(string): west's port from connection()
            username(string): username who's create connection
        """
        # Query for delete disconnected pair
        connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
        connections_disconnected_pair.delete()

        for i in connections_disconnected_pair:
            obj = Connection.objects.filter(east=i.east, west=i.west)
            obj.delete()

        if Connection.objects.filter(east=east, west=west):
            return JsonResponse({'status': 'error', 'error': 'These port {} {} already used'.format(east, west)})

        elif Connection.objects.filter(east=east):
            return JsonResponse({'status': 'error', 'error': 'This east port {} already used'.format(east)})

        elif Connection.objects.filter(west=west):
            return JsonResponse({'status': 'error', 'error': 'This west port {} already used'.format(west)})

        connections = Connection.objects.create(east=east, west=west, status='pending')
        connections.save()
        connectionhistorys = ConnectionHistory.objects.create(east=east, west=west, switching_type='C', status='pending',
                                                              username=username)
        connectionhistorys.save()

        # Validate input
        if 'stops' in request.data:
            stops = request.data['stops']

        else:
            stops = None

        if stops:
            payload = {'east': east.number, 'west': west.number, 'action': "connect", 'stops': stops}

        else:
            payload = {'east': east.number, 'west': west.number, 'action': "connect"}

        # Validate using dummy
        if walk.is_dummy():
            resp = walk.connect(payload)

        else:
            resp = requests.post(CELERY_APP + '/connect', data=payload)

        uuid = resp.text
        operations = Operation.objects.all()
        robots = Robot.objects.all()

        robotnumber = ''
        for r in robots:
            robotnumber = r.robot_number

        if len(operations) > 0:
            operations.delete()
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()
            # operations.update(uuid=uuid, status='pending', request=str(payload))

        else:
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()

        operationhistorys = OperationHistory.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                            request=str(payload))
        operationhistorys.save()
        logger.info('%s connect E%s W%s stops:%s', uuid, east.number, west.number, stops)

        #  connection counter
        Port.objects.all().filter(direction='E', number=str(east.number)).update(
            connection_counter=F('connection_counter') + 1)
        Port.objects.all().filter(direction='W', number=str(west.number)).update(
            connection_counter=F('connection_counter') + 1)

        # check connection are created
        check_connection = Connection.objects.filter(east=east, west=west)
        if check_connection is None:
            # Query for delete disconnected pair
            connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
            connections_disconnected_pair.delete()

            ctypes.windll.user32.MessageBoxW(0, check_connection, "connection does not created", 1)
            connections = Connection.objects.create(east=east, west=west, status='pending')
            connections.save()
