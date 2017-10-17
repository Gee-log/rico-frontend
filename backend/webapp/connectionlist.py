"""connectionlist api
"""

import ast
import logging
import logging.handlers
import requests
from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse

from webapp.models import Connection, Port, ConnectionHistory, Operation, OperationHistory
from webapp.serializers import ConnectionSerializer
from webapp.views import walk, CELERY_APP


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
            operations = Operation.objects.filter(robotnumber='1')
            conns = Connection.objects.all().filter(disconnected_date=None)
            data = []

            for c in conns:
                obj = {'east': c.east.number, 'west': c.west.number, 'status': c.status}
                data.append(obj)

            if len(operations) > 0:
                logger.info('operation: %s conn: %s', operations[0], data)

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

        # If using white walker dummy
        if walk.is_dummy():
            return self.for_whitewalker(request)

        # If not using white walker dummy
        else:
            # Check if current status is not error then call for_embest()
            if self.check_current_status(request) not in ['error', 'alarm']:
                return self.for_embest(request)
            
            # Check if current status is error then return error message
            else:
                return self.query_status_error(request)

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

    def for_whitewalker(self, request):
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

        # Angular2 cannot access database if request superuser
        # If request.user.is_superuser or request.user.is_staff:

        logger.info(request.data)

        # Validate errors inputs
        if 'action' not in request.data:
            error_detail = {'error': 'No action'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'east' not in request.data:
            error_detail = {'error': 'No east'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'west' not in request.data:
            error_detail = {'error': 'No west'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        # Debug mode checking condition
        if 'number' in request.data and 'stops' in request.data:
            return self.debug(request)

        # Validate action
        if request.data['action'] == 'disconnect':
            return self.disconnect(request)

        elif request.data['action'] == 'test_connect':
            return self.test_connect(request)

        elif request.data['action'] == 'connect':
            return self.connection(request)

        else:
            error_detail = {'error': 'Invalid action'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

    def for_embest(self, request):
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

        # Angular2 cannot access database if request superuser
        # if request.user.is_superuser or request.user.is_staff:

        logger.info(request.data)

         # Validate errors inputs
        if 'action' not in request.data:
            error_detail = {'error': 'No action'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'east' not in request.data:
            error_detail = {'error': 'No east'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        if 'west' not in request.data:
            error_detail = {'error': 'No west'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

        # Debug mode checking condition
        if 'number' in request.data and 'stops' in request.data:

            # If current status is break then making debug mode
            if self.check_current_status(request) == 'break':
                return self.debug(request)

            # If current status is started or pending then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending']:
                return JsonResponse({'status': 'error', 'error': 'robotworking'})

            # Else return error_status message
            else:
                return JsonResponse({'status': 'error', 'error': 'status'})

        # Disconnection checking condition
        elif request.data['action'] == 'disconnect':

            # If current status is success or revoked or no_uuid then making disconnection
            if self.check_current_status(request) in ['success', 'revoked', 'no_uuid']:
                return self.disconnect(request)

            # If current status is started or pending or break then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending', 'break']:
                return JsonResponse({'status': 'error', 'error': 'robotworking'})

            # Else return error_status message
            else:
                return JsonResponse({'status': 'error', 'error': 'status'})

        # Connection checking condition
        elif request.data['action'] == 'connect':

            # If current status is success or revoked or no_uuid then making connection
            if self.check_current_status(request) in ['success', 'revoked', 'no_uuid']:
                return self.connection(request)

            # If current status is started or pending or break then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending', 'break']:
                return JsonResponse({'status': 'error', 'error': 'robotworking'})

            # Else return error_status message
            else:
                return JsonResponse({'status': 'error', 'error': 'status'})

        # Create connection in connection table
        elif request.data['action'] == 'test_connect':
            return self.test_connect(request)

        # Else return error_operation message
        else:
            return JsonResponse({'status': 'error', 'error': 'operation'})

    def debug(self, request):
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

        east, west = self.get_available_ports(request)
        logger.info('debug %s - %s', east, west)

        # Validate input
        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        logger.info('connection_history %s - %s', east, west)
        # create debug mode
        self.create_debug(request, east, west)

        return Response(request.data)

    def create_debug(self, request, east, west):
        """Create debug Process in database

        Args:
            request: request data
            east(string): east's port from debug()
            west(string): west's port from debug()
        """

        # Validate input
        if 'number' in request.data and 'stops' in request.data:
            number = request.data['number']
            stops = request.data['stops']
            action = request.data['action']

        else:
            number = None
            stops = None

        if stops and number:
            payload = {'east': east.number, 'west': west.number, 'action': str(action), 'stops': str(stops),
                       'no': str(number)}

        else:
            return False

        # Validate using dummy
        if walk.is_dummy():
            resp = walk.debug(payload)

        else:
            resp = requests.post(CELERY_APP + '/debug', data=payload)

        uuid = resp.text
        logger.info('%s %s E%s W%s stops:%s no:%s', uuid, action, east.number, west.number, stops, number)
        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending', request=str(payload))

        else:
            Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

    def connection(self, request):
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

        # Angular2 cannot access database if request is superuser
        # if request.user.is_superuser or request.user.is_staff:

        east, west = self.get_available_ports(request)
        logger.info('connection %s - %s', east, west)

        # Validate input
        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create connection
        self.create_connect(request, east, west)

        return Response(request.data, status=status.HTTP_201_CREATED)

    def create_connect(self, request, east, west):
        """Create connection in database

        Args:
            request: request data
            east(string): east's port from connection()
            west(string): west's port from connection()
        """

        Connection.objects.create(east=east, west=west, status='pending')
        ConnectionHistory.objects.create(east=east, west=west, switching_type='C', status='pending')

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
        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending', request=str(payload))

        else:
            Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

        OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        logger.info('%s connect E%s W%s stops:%s', uuid, east.number, west.number, stops)

    def disconnect(self, request):
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

        east, west = self.get_available_ports(request)
        logger.info('disconnection %s - %s', east, west)

        # Validate input
        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create disconnection
        self.create_disconnect(request, east, west)

        return Response(request.data, status=status.HTTP_201_CREATED)

    def create_disconnect(self, request, east, west):
        """Create disconnection in database

        Args:
            request: request data
            east(string): east's port from get_available_ports()
            west(string): west's port from get_available_ports()
        """

        conns = Connection.objects.all().filter(disconnected_date=None)
        for c in conns:

            if c.east == east and c.west == west:
                Connection.objects.filter(east=east, west=west, disconnected_date=None, status='success').update(
                    status='pending')
                ConnectionHistory.objects.create(east=east, west=west, switching_type='D', status='pending')
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
                operations = Operation.objects.filter(robotnumber='1')

                if len(operations) == 1:
                    operations.update(uuid=uuid, status='pending', request=str(payload))

                else:
                    Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

                OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
                logger.info('%s disconnection E%s W%s stops:%s', uuid, east.number, west.number, stops)


    def get_available_ports(self, request):
        """Query available port in database

        Args:
            request: request data

        Returns:
            east (object): west port
            west (object): east port
        """

        east, west = None, None

        e = int(request.data['east'])
        w = int(request.data['west'])

        # find available ports
        ports = Port.objects.all()
        for p in ports:

            if p.direction == 'E' and p.number == e:
                east = p
                logger.info('east %s', east)

            if p.direction == 'W' and p.number == w:
                west = p
                logger.info('west %s', west)

        return east, west

    def check_current_status(self, request):
        """Check current status from celery

        Args:
            request: request data

        Returns:
            status (string): status
        """

        uuid = None
        status = 'no_uuid'

        operations = Operation.objects.all()
        for i in operations:

            uuid = str(i.uuid)

        if uuid is not None:
            resp = requests.get(CELERY_APP + '/result?id=' + uuid)
            data = str(resp.json())
            data_dict = ast.literal_eval(data)
            status = data_dict['status']
            
            return status

        else:           
            return status
    
    def query_status_error(self, request):
        """Query error detail of error status from celery

        Args:
            request: request data

        Returns:
            status (string): status
        """

        status = ''
        error = ''

        operations = Operation.objects.all()
        for i in operations:

            uuid = str(i.uuid)
            resp = requests.get(CELERY_APP + '/result?id=' + uuid)
            data = str(resp.json())
            data_dict = ast.literal_eval(data)
            status = data_dict['status']
            error = data_dict['error']
            
        return JsonResponse({'status': status, 'error': error})

    def test_connect(self, request):
        """Create a connection in connection table

        Args:
            request: request data

        Returns:
            Json = ({'status': 'success', 'east': str(east), 'west': str(west)})
        """

        east, west = self.get_available_ports(request)
        connected_east = []
        connected_west = []

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
                return JsonResponse({'status': 'error', 'error': 'one of this ports is connected'})

        else:
            Connection.objects.create(east=east, west=west, status='success')

            return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
