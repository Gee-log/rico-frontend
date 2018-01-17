"""For dummy robot use whitewalker
"""
import logging.handlers

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs.connectionlist_connection import CreateConnection
from webapp.libs.connectionlist_disconnect import CreateDisconnect
from webapp.libs.connectionlist_debug_mode import CreateDebugMode
from webapp.libs.connectionlist_utilities import ConnectionUtilities


# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('for_whitewalker')

# create a file handler
handler = logging.handlers.RotatingFileHandler('for_whitewalker.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ForWhitewalker(object):

    @staticmethod
    def validate_input(request):
        """For using with whitewalker

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

        # Validate errors inputs
        request_data = JSONParser().parse(request)

        if 'action' not in request_data:
            return_data = {'error': 'No action'}
            logger.error('for_whitewalker: error:{} request:{}'.format(return_data, request_data))
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        if 'east' not in request_data:
            return_data = {'error': 'No east'}
            logger.error('for_whitewalker: error:{} request:{}'.format(return_data, request_data))
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        if 'west' not in request_data:
            return_data = {'error': 'No west'}
            logger.error('for_whitewalker: error:{} request:{}'.format(return_data, request_data))
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        # Debug mode checking condition
        if 'number' in request_data and 'stops' in request_data:
            return CreateDebugMode.validate_input_to_create_debug_mode(request_data)

        # Validate action
        if request_data['action'] == 'disconnect':
            return CreateDisconnect.validate_input_to_create_disconnection(request_data)

        elif request_data['action'] == 'create_connection':
            return ConnectionUtilities.create_dummy_connection(request_data)

        elif request_data['action'] == 'connect':
            return CreateConnection.validate_input_to_create_connection(request_data)

        else:
            return_data = {'error': 'Invalid action'}
            logger.error('for_whitewalker: error:{} request:{}'.format(return_data, request_data))
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
