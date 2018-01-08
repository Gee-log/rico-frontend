"""for running robot
"""

import logging.handlers
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import status

from webapp.libs.connectionlist_connection import CreateConnection
from webapp.libs.connectionlist_disconnect import CreateDisconnect
from webapp.libs.connectionlist_debug_mode import CreateDebugMode
from webapp.libs.connectionlist_utilities import ConnectionUtilities
from webapp.libs.validation_error import ValidateError

connectionutilies = ConnectionUtilities

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('for_embest')

# create a file handler
handler = logging.handlers.RotatingFileHandler('for_embest.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ForEmbest(object):

    @staticmethod
    def validate_input(request):
        """For using with embest

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
            logger.error('validate_input method: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'east' not in request.data:
            error_detail = {'error': 'No east'}
            logger.error('validate_input method: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'west' not in request.data:
            error_detail = {'error': 'No west'}
            logger.error('validate_input method: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        # Debug mode checking condition
        if 'number' in request.data and 'stops' in request.data:

            # If current status is break then making debug mode
            if ValidateError.check_current_status() == 'break':
                return CreateDebugMode.validate_input_to_create_debug_mode(request)

            # If current status is started or pending then return error_robotworking message
            elif ValidateError.check_current_status() in ['started', 'pending']:
                logger.error('validation_errors.check_current_status debug mode method: error:robotworking request:{}'
                             .format(request))
                return JsonResponse({'status': 'error', 'error': 'robotworking'}, status=status.HTTP_400_BAD_REQUEST)

            # Else return error_status message
            else:
                logger.error('validation_errors.check_current_status debug mode method: error:status unknown request:{}'
                             .format(request))
                return JsonResponse({'status': 'error', 'error': 'status'}, status=status.HTTP_400_BAD_REQUEST)

        # Disconnection checking condition
        elif request.data['action'] == 'disconnect':

            # If current status is success or revoked or no_uuid then making disconnection
            if ValidateError.check_current_status() in ['success', 'revoked', 'no_uuid', 'failure']:
                return CreateDisconnect.validate_input_to_create_disconnection(request)

            # If current status is started or pending or break then return error_robotworking message
            elif ValidateError.check_current_status() in ['started', 'pending', 'break']:
                logger.error('validation_errors.check_current_status disconnection method: '
                             'error:robotworking request:{}'.format(request))
                return JsonResponse({'status': 'error', 'error': 'robotworking'}, status=status.HTTP_400_BAD_REQUEST)

            # Else return error_status message
            else:
                logger.error('validation_errors.check_current_status disconnection method:'
                             ' error:status unknown request:{}'.format(request))
                return JsonResponse({'status': 'error', 'error': 'status'}, status=status.HTTP_400_BAD_REQUEST)

        # Connection checking condition
        elif request.data['action'] == 'connect':

            # If current status is success or revoked or no_uuid then making connection
            if ValidateError.check_current_status() in ['success', 'revoked', 'no_uuid', 'failure']:
                return CreateConnection.validate_input_to_create_connection(request)

            # If current status is started or pending or break then return error_robotworking message
            elif ValidateError.check_current_status() in ['started', 'pending', 'break']:
                logger.error('validation_errors.check_current_status connection method: error:robotworking request:{}'
                             .format(request))
                return JsonResponse({'status': 'error', 'error': 'robotworking'}, status=status.HTTP_400_BAD_REQUEST)

            # Else return error_status message
            else:
                logger.error('validation_errors.check_current_status connection method: error:status request:{}'
                             .format(request))
                return JsonResponse({'status': 'error', 'error': 'status unknown'}, status=status.HTTP_400_BAD_REQUEST)

        # Create connection in connection table
        elif request.data['action'] == 'create_connection':
            return ConnectionUtilities.create_dummy_connection(request)

        # Else return error_operation message
        else:
            logger.error('validation_errors.check_current_status connection method: error:action unknown request:{}'
                         .format(request))
            return JsonResponse({'status': 'error', 'error': 'operation'}, status=status.HTTP_400_BAD_REQUEST)
