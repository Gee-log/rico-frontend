"""connectionlist create disconnection
"""
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

        Returns:
            json:
                east (string): east port number
                west (string): west port number
                status (string): status code
                action (string): action type
        """

        # Angular2 cannot access database if request is superuser
        # if request.user.is_superuser or request.user.is_staff:

        username = request.data['username']
        east, west = get_available_ports.get_available_port(request)
        logger.info('disconnection %s - %s', east, west)

        # Validate input
        if east is None:
            logger.error('disconnect: error:no east port number {} request:{}'.format(east, request))
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            logger.error('disconnect: error:no west port number {} request:{}'.format(west, request))
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create disconnection
        CreateDisconnect.create_disconnect(request, east, west, username)

        return Response(request.data, status=status.HTTP_201_CREATED)

    @staticmethod
    def create_disconnect(request, east, west, username):
        """Create disconnection in database

        Args:
            request: request data
            east(string): east's port from get_available_ports()
            west(string): west's port from get_available_ports()
            username (string): username from post method
        """

        # Query for delete disconnected pair
        connections_disconnected_pair = Connection.objects.all().exclude(disconnected_date=None)
        connections_disconnected_pair.delete()

        # Query for check this pair are connected or not
        check_pair_connected = Connection.objects.filter(east=east, west=west, status='success')

        if check_pair_connected is None:
            return JsonResponse({'status': 'error', 'error': 'These port {} {} does not exist'.format(east, west)})

        connections = Connection.objects.filter(east=east, west=west, status='success').exclude(connected_date=None)
        connections.update(status='pending')
        connectionhistorys = ConnectionHistory.objects.create(east=east, west=west, switching_type='D', status='pending',
                                                              username=username)
        connectionhistorys.save()
        logger.info('connection_history %s - %s', east, west)

        # Validate input
        if 'stops' in request.data:
            stops = request.data['stops']

        else:
            stops = None

        if stops:
            payload = {'east': east.number, 'west': west.number, 'action': "disconnect", 'stops': stops}

        else:
            payload = {'east': east.number, 'west': west.number, 'action': "disconnect"}

        # Validate using dummy
        if walk.is_dummy():
            resp = walk.disconnect(payload)

        else:
            resp = requests.post(CELERY_APP + '/disconnect', data=payload)

        uuid = resp.text
        operations = Operation.objects.all()
        robots = Robot.objects.all()
        robotnumber = ''

        for r in robots:
            robotnumber = r.robot_number

        if len(operations) > 0:
            # operations.delete()
            # Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending', request=str(payload))
            operations.update(uuid=uuid, status='pending', request=str(payload))

        else:
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()

        operationhistorys = OperationHistory.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                            request=str(payload))
        operationhistorys.save()
        logger.info('%s disconnection E%s W%s stops:%s', uuid, east.number, west.number, stops)

        #  connection counter
        Port.objects.all().filter(direction='E', number=str(east.number)).update(
            connection_counter=F('connection_counter') + 1)
        Port.objects.all().filter(direction='W', number=str(west.number)).update(
            connection_counter=F('connection_counter') + 1)