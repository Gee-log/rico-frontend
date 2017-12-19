"""connectionlist create debug mode
"""
import logging.handlers
import requests

from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs.get_available_port import GetAvailablePort
from webapp.models import Operation, OperationHistory, Robot
from webapp.views import walk, CELERY_APP

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionlist_debug_mode')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionlist_debug_mode.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class CreateDebugMode(object):

    @staticmethod
    def validate_input_to_create_debug_mode(request):
        """Debug Process

        Args:
            request: request data

        Returns:
            json:
                east (string): east port number
                west (string): west port number
                status (string): status code
                number (string): number of sequence
                stops (string): current sequence
                action (string): action type
        """

        east, west = GetAvailablePort.get_available_port(request)
        logger.info('debug %s - %s', east, west)

        # Validate input
        if east is None:
            logger.error('debug: error:no east port number {} request:{}'.format(east, request))
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            logger.error('debug: error:no west port number {} request:{}'.format(west, request))
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create debug mode
        CreateDebugMode.create_debug(request, east, west)

        logger.info('debug: response method return data: {}'.format(request.data))
        return Response(request.data, status=status.HTTP_200_OK)

    @staticmethod
    def create_debug(request, east, west):
        """Create debug Process in database

        Args:
            request: request data
            east(string): east's port from debug()
            west(string): west's port from debug()
        """

        # Validate input
        if 'number' in request.data and 'stops' in request.data:
            action = request.data['action']
            number = request.data['number']
            stops = request.data['stops']

        else:
            number = None
            stops = None

        if stops and number:
            payload = {'east': east.number, 'west': west.number, 'action': str(action), 'stops': str(stops),
                       'no': str(number)}

        else:
            return JsonResponse({'status': 'error', 'error': 'Invalid Debug Input'})

        # Validate using dummy
        if walk.is_dummy():
            resp = walk.debug(payload)

        else:
            resp = requests.post(CELERY_APP + '/debug', data=payload)

        uuid = resp.text
        logger.info('%s %s E%s W%s stops:%s no:%s', uuid, action, east.number, west.number, stops, number)
        operations = Operation.objects.all()
        robotnumber = ''

        robots = Robot.objects.all()
        for r in robots:
            robotnumber = r.robot_number

        if len(operations) > 0:
            operations.delete()
            operations = Operation.objects.create(uuid=uuid, robotnumber=robotnumber, status='pending',
                                                  request=str(payload))
            operations.save()

        else:
            operations = Operation.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                  request=str(payload))
            operations.save()

        operationhistorys = OperationHistory.objects.create(robotnumber=robotnumber, uuid=uuid, status='pending',
                                                            request=str(payload))
        operationhistorys.save()