"""For dummy robot use whitewalker
"""

import logging.handlers
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs import connectionlist_connection, connectionlist_disconnect, connectionlist_debug_mode, \
    validation_error

# set connectionlist_action_connection
connectionlist_action_connection = connectionlist_connection.CreateConnection

# set connectionlist_action_disconnection
connectionlist_action_disconnection = connectionlist_disconnect.CreateDisconnect

# set connectionlist_action_debug_mode
connectionlist_action_debug_mode = connectionlist_debug_mode.CreateDebugMode

# set validation_errors
validation_errors = validation_error.ValidateError

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
        if 'action' not in request.data:
            error_detail = {'error': 'No action'}
            logger.error('for_whitewalker: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'east' not in request.data:
            error_detail = {'error': 'No east'}
            logger.error('for_whitewalker: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'west' not in request.data:
            error_detail = {'error': 'No west'}
            logger.error('for_whitewalker: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        # Debug mode checking condition
        if 'number' in request.data and 'stops' in request.data:
            return connectionlist_action_debug_mode.validate_input_to_create_debug_mode(request)

        # Validate action
        if request.data['action'] == 'disconnect':
            return connectionlist_action_disconnection.validate_input_to_create_disconnection(request)

        elif request.data['action'] == 'test_connect':
            # return self.test_connect(request)
            return None

        elif request.data['action'] == 'connect':
            return connectionlist_action_connection.validate_input_to_create_connection(request)

        else:
            error_detail = {'error': 'Invalid action'}
            logger.error('for_whitewalker: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)
