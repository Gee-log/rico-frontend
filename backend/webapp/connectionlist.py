"""connectionlist api
"""
import json
import logging.handlers

from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.authorization import ValidationUser
from webapp.libs.for_embest import ForEmbest
from webapp.libs.for_whitewalker import ForWhitewalker
from webapp.libs.validation_error import ValidateError
from webapp.models import Connection, Operation, Port
from webapp.serializers import ConnectionSerializer
from webapp.views import walk

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

        # get current connected port data
        request_data = json.dumps(request.GET)
        request_data = json.loads(request_data)

        if 'action' in request_data:
            action = request_data['action']

            if action == 'connected':
                operations = Operation.objects.all()
                conns = Connection.objects.all().filter(disconnected_date=None)
                return_data = []

                for c in conns:
                    obj = {'east': c.east.number, 'west': c.west.number, 'status': c.status,
                           'connected_date': c.connected_date}
                    return_data.append(obj)

                if len(operations) > 0:
                    logger.info(
                        'Connectionlist get method: current operation: {}, data: {}'.format(operations, return_data))
                else:
                    logger.info('Connectionlist get method: empty operation, data: {}'.format(return_data))

                return Response(return_data, status=status.HTTP_200_OK)

        # get his paired
        elif 'east' or 'west' in request_data:

            if 'east' in request_data:
                east = int(request_data['east'])

                # find available ports
                ports = Port.objects.all()
                for p in ports:
                    
                    if p.direction == 'E' and p.number == east:
                        east = p

                conns = Connection.objects.all().filter(east=east)
                serializer = ConnectionSerializer(conns, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            if 'west' in request_data:
                west = int(request_data['west'])

                # find available ports
                ports = Port.objects.all()
                for p in ports:

                    if p.direction == 'W' and p.number == west:
                        west = p

                conns = Connection.objects.all().filter(west=west)
                serializer = ConnectionSerializer(conns, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            
            else:
                return_data = {'status': 'error', 'detail': 'east port or west port not exist in database.'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        # get all port data
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

        if ValidationUser.validate_http_authorization(request) is True:
           
            # If using white walker dummy
            if walk.is_dummy():
                return ForWhitewalker.validate_input(request)

            # If not using white walker dummy
            else:

                # Check if current status is not error then call for_embest()
                if ValidateError.check_current_status() not in ['error', 'alarm']:
                    return ForEmbest.validate_input(request)
                
                # Check if current status is error then return error message
                else:
                    return ValidateError.query_status_error()
        
        else:
            return_data = ({'detail': 'Permission denied'})
            logger.error('validate_user.validate_http_authorization method: error:{} request:{}'.format(
                        return_data, request.META.get('HTTP_AUTHORIZATION')))
            return Response(return_data, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request):
        """PUT ConnectionList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE ConnectionList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    #################
    # DO NOT DELETE #
    #################
    # def test_connect(self, request):
    #     """Create a connection in connection table
    #
    #     Args:
    #         request: request data
    #
    #     Returns:
    #         Json = ({'status': 'success', 'east': str(east), 'west': str(west)})
    #     """
    #
    #     connected_east, connected_west = [], []
    #     east, west = self.get_available_ports(request)
    #
    #     conns = Connection.objects.filter(disconnected_date=None)
    #     if conns is not None:
    #
    #         for i in conns:
    #             obj_east = i.east
    #             obj_west = i.west
    #             connected_east.append(obj_east)
    #             connected_west.append(obj_west)
    #
    #         if east not in connected_east and west not in connected_west:
    #             Connection.objects.create(east=east, west=west, status='success')
    #             return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
    #
    #         else:
    #             return JsonResponse({'status': 'error', 'error': 'one or two of these ports is connected'})
    #
    #     else:
    #         Connection.objects.create(east=east, west=west, status='success')
    #         return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
