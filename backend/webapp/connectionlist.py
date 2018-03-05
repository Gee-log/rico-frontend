"""connectionlist api
"""

import logging.handlers
from django.http import JsonResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs import connectionlist_connection, connectionlist_disconnect, connectionlist_debug_mode, \
    validation_error, for_whitewalker, for_embest
from webapp.models import Connection, Operation
from webapp.serializers import ConnectionSerializer
from webapp.views import walk


# set connectionlist_action_connection
connectionlist_action_connection = connectionlist_connection.CreateConnection

# set connectionlist_action_disconnection
connectionlist_action_disconnection = connectionlist_disconnect.CreateDisconnect

# set connectionlist_action_debug_mode
connectionlist_action_debug_mode = connectionlist_debug_mode.CreateDebugMode

# set validation_errors
validation_errors = validation_error.ValidateError

# set for_whitewalker
is_whitewalker = for_whitewalker.ForWhitewalker

# set for_embest
is_embest = for_embest.ForEmbest

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionlist')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionlist.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ConnectionList(APIView):

    def get(self, request):
        """GET ConnectionList API

        Args:
            request: request data

        Returns:
            json:
                If action == 'connected':
                    east (integer): east port number
                    west (integer): west port number
                    status (string): status code
                Else:
                    east (integer): east port object number
                    west (integer): west port object number
                    connected_date (datetime): connected time
                    disconnected_date (datetime): disconnected time
                    status (string): status code
        """

        # Get connected port data
        if 'action' in request.GET and request.GET['action'] == 'connected':
            operations = Operation.objects.all()
            conns = Connection.objects.all().filter(disconnected_date=None)
            data = []

            for c in conns:
                obj = {'east': c.east.number, 'west': c.west.number, 'status': c.status, 'connected_date':
                       c.connected_date}
                data.append(obj)

            if len(operations) == 1:
                logger.info('operation: %s conn: %s', operations, data)

            else:
                logger.info('conn: %s', data)

            return Response(data, status=status.HTTP_200_OK)

        # Get all port data
        else:
            conns = Connection.objects.all().filter(disconnected_date=None)
            serializer = ConnectionSerializer(conns, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST ConnectionList API

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

        # Validate authorization
        if request.META.get('HTTP_AUTHORIZATION'):

            # Set token
            token = request.META.get('HTTP_AUTHORIZATION')

            # Check token is exist in database or not
            if Token.objects.all().filter(key=token):

                # If using white walker dummy
                if walk.is_dummy():
                    return is_whitewalker.validate_input(request)

                # If not using white walker dummy
                else:
                    # Check if current status is not error then call for_embest()
                    if validation_errors.check_current_status() not in ['error', 'alarm']:
                        return is_embest.validate_input(request)
                    
                    # Check if current status is error then return error message
                    else:
                        return validation_errors.query_status_error()
            
            else:
                error_detail = {'detail': 'Permission denied'}
                logger.error('post: error:{} request:{}'.format(error_detail, request))
                return Response(error_detail, status=status.HTTP_401_UNAUTHORIZED)
                
        else:
            error_detail = {'detail': 'Permission denied'}
            logger.error('post: error:{} request:{}'.format(error_detail, request))
            return Response(error_detail, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request):
        """PUT ConnectionList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE ConnectionList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_connect(self, request):
        """Create a connection in connection table

        Args:
            request: request data

        Returns:
            Json = ({'status': 'success', 'east': str(east), 'west': str(west)})
        """

        connected_east, connected_west = [], []
        east, west = self.get_available_ports(request)

        conns = Connection.objects.filter(disconnected_date=None)
        if conns is not None:

            for i in conns:
                obj_east = i.east
                obj_west = i.west
                connected_east.append(obj_east)
                connected_west.append(obj_west)

            if east not in connected_east and west not in connected_west:
                Connection.objects.create(east=east, west=west, status='success')
                return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
            
            else:
                return JsonResponse({'status': 'error', 'error': 'one or two of these ports is connected'})

        else:
            Connection.objects.create(east=east, west=west, status='success')
            return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
