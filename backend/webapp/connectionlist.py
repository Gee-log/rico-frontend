from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from webapp.models import Connection, Port, ConnectionHistory, Operation, OperationHistory
from webapp.serializers import ConnectionSerializer
from webapp.views import walk, CELERY_APP
import ast
import logging
import requests


# Log process

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionlist')

# create a file handler
handler = logging.FileHandler('connectionlist.log')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ConnectionList(APIView):

    def get(self, request):
        """GET ConnectionList API

        Args:
            request: request data

        Returns:
            If action == 'connected'
            Json: data
            ({'east': c.east.number, 'west': c.west.number, 'status': c.status})

            Else
            Json: ConnectionList data
        """

        # logger.info('ConnectionList get %s', request.GET)
        if 'action' in request.GET and request.GET['action'] == 'connected':
            operations = Operation.objects.filter(robotnumber='1')
            conns = Connection.objects.all().filter(disconnected_date=None)
            data = []
            for c in conns:

                obj = {'east': c.east.number,
                       'west': c.west.number, 'status': c.status}
                data.append(obj)

            if len(operations) > 0:
                logger.info('operation: %s conn: %s', operations[0], data)

            else:
                logger.info('conn: %s', data)

            return Response(data)

        else:
            conns = Connection.objects.all().filter(disconnected_date=None)
            serializer = ConnectionSerializer(conns, many=True)

            return Response(serializer.data)

    def post(self, request):
        """POST ConnectionList API

        Args:
            request: request data

        Returns:
            Json: request.data
        """
        if self.check_current_status_error(request):

            # If use white walker dummy
            if walk.is_dummy():
                return self.for_whitewalker(request)

            # If not use white walker dummy
            else:
                return self.for_embest(request)
        
        else:
            return self.query_status_error(request)

    def for_whitewalker(self, request):

        # Angular2 cannot access database if request superuser
        # if request.user.is_superuser or request.user.is_staff:
        logger.info(request.data)
        # validate inputs
        if 'action' not in request.data:
            return Response('No action', content_type="text/plain")

        if 'east' not in request.data:
            return Response('No east', content_type="text/plain")

        if 'west' not in request.data:
            return Response('No west', content_type="text/plain")

        if 'number' in request.data and 'stops' in request.data:
            return self.debug(request)

        elif request.data['action'] == 'disconnect':
            return self.disconnect(request)

        else:
            return self.connection(request)

    def for_embest(self, request):

        # Angular2 cannot access database if request superuser
        # if request.user.is_superuser or request.user.is_staff:
        logger.info(request.data)
        # validate inputs
        if 'action' not in request.data:
            return Response('No action', content_type="text/plain")

        if 'east' not in request.data:
            return Response('No east', content_type="text/plain")

        if 'west' not in request.data:
            return Response('No west', content_type="text/plain")

        # Debug mode checking condition
        if 'number' in request.data and 'stops' in request.data:

            # If current status is success or break then making debug mode
            if self.check_current_status(request) in ['success', 'break']:
                return self.debug(request)

            # If current status is started or pending then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending']:
                return HttpResponse('error_robotworking')

            # Else return error_uuid  message
            else:
                return HttpResponse('error_uuid')

        # Disconnection checking condition
        elif request.data['action'] == 'disconnect':

            # If current status is success then making disconnection
            if self.check_current_status(request) == 'success':
                return self.disconnect(request)

            # If current status is started or pending or break then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending', 'break']:
                return HttpResponse('error_robotworking')

            # Else return error_uuid  message
            else:
                return HttpResponse('error_uuid')

        # Connection checking condition
        elif request.data['action'] == 'connect':

            # If current status is success then making connection
            if self.check_current_status(request) == 'success':
                return self.connection(request)

            # If current status is started or pending or break then return error_robotworking message
            elif self.check_current_status(request) in ['started', 'pending', 'break']:
                return HttpResponse('error_robotworking')

            # Else return error_uuid  message
            else:
                return HttpResponse('error_uuid')

        # Else return error_operation message
        else:
            return HttpResponse('error_operation')

    def debug(self, request):
        """Debug Process

        Args:
            request: request data

        Returns:
            Json: request.data
        """

        east, west = self.get_available_ports(request)
        logger.info('debug %s - %s', east, west)

        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        logger.info('connection_history %s - %s', east, west)
        self.create_debug(request, east, west)

        return Response(request.data)

    def create_debug(self, request, east, west):
        """Create debug Process in database

        Args:
            request: request data
            east(string): east's port from debug()
            west(string): west's port from debug()
        """

        if 'number' in request.data and 'stops' in request.data:
            number = request.data['number']
            stops = request.data['stops']
            action = request.data['action']

        else:
            number = None
            stops = None
            action = None

        if stops and number:
            payload = {'east': east.number, 'west': west.number, 'action': str(action), 'stops': str(stops),
                       'no': str(number)}

        else:
            return False

        if walk.is_dummy():
            resp = walk.debug(payload)

        else:
            resp = requests.post(CELERY_APP + '/debug', data=payload)
        uuid = resp.text
        logger.info('%s %s E%s W%s stops:%s no:%s', uuid, action,
                    east.number, west.number, stops, number)

        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending',
                              request=str(payload))

        else:
            Operation.objects.create(
                robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        OperationHistory.objects.create(
            robotnumber='1', uuid=uuid, status='pending', request=str(payload))

    def connection(self, request):
        """Connection Process

        Args:
            request: request data

        Returns:
            Json: request.data
        """

        # Angular2 cannot access database if request is superuser
        # if request.user.is_superuser or request.user.is_staff:
        east, west = self.get_available_ports(request)
        logger.info('connection %s - %s', east, west)

        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create connection
        self.create_connect(request, east, west)

        return Response(request.data)

    def create_connect(self, request, east, west):
        """Create connection in database

        Args:
            request: request data
            east(string): east's port from connection()
            west(string): west's port from connection()
        """

        Connection.objects.create(east=east, west=west, status='pending')
        ConnectionHistory.objects.create(
            east=east, west=west, switching_type='C', status='pending')

        if 'stops' in request.data:
            stops = request.data['stops']

        else:
            stops = None

        if stops:
            payload = {'east': east.number, 'west': west.number,
                       'action': "connect", 'stops': stops}

        else:
            payload = {'east': east.number,
                       'west': west.number, 'action': "connect"}

        if walk.is_dummy():
            resp = walk.connect(payload)

        else:
            resp = requests.post(CELERY_APP + '/connect', data=payload)

        uuid = resp.text

        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending',
                              request=str(payload))

        else:
            Operation.objects.create(
                robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        OperationHistory.objects.create(
            robotnumber='1', uuid=uuid, status='pending', request=str(payload))

        logger.info('%s connect E%s W%s stops:%s', uuid,
                    east.number, west.number, stops)

    def disconnect(self, request):
        """Disconnection Process

        Args:
            request: request data

        Returns:
            Json: request.data
        """

        # Angular2 cannot access database if request is superuser
        # if request.user.is_superuser or request.user.is_staff:
        east, west = self.get_available_ports(request)
        logger.info('disconnection %s - %s', east, west)

        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")

        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create disconnection
        self.create_disconnect(request, east, west)

        return Response(request.data)

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
                ConnectionHistory.objects.create(
                    east=east, west=west, switching_type='D', status='pending')
                logger.info('connection_history %s - %s', east, west)

                if 'stops' in request.data:
                    stops = request.data['stops']

                else:
                    stops = None

                if stops:
                    payload = {'east': east.number, 'west': west.number,
                               'action': "disconnect", 'stops': stops}

                else:
                    payload = {'east': east.number,
                               'west': west.number, 'action': "disconnect"}

                if walk.is_dummy():
                    resp = walk.disconnect(payload)

                else:
                    resp = requests.post(
                        CELERY_APP + '/disconnect', data=payload)

                uuid = resp.text

                operations = Operation.objects.filter(robotnumber='1')

                if len(operations) == 1:
                    operations.update(
                        uuid=uuid, status='pending', request=str(payload))

                else:
                    Operation.objects.create(
                        robotnumber='1', uuid=uuid, status='pending', request=str(payload))
                OperationHistory.objects.create(
                    robotnumber='1', uuid=uuid, status='pending', request=str(payload))

                logger.info('%s disconnection E%s W%s stops:%s',
                            uuid, east.number, west.number, stops)

    def get_available_ports(self, request):
        """Query available port in database

        Args:
            request: request data

        Returns:
            east: west port
            west: east port
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
            status: status
        """

        status = 'error_uuid'

        operations = Operation.objects.filter(robotnumber='1')
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

    def check_current_status_error(self, request):
        """Check current status error from celery

        Args:
            request: request data

        Returns:
            status: status
        """

        operations = Operation.objects.filter(robotnumber='1')
        for i in operations:

            uuid = str(i.uuid)

            if uuid is not None:
                resp = requests.get(CELERY_APP + '/result?id=' + uuid)
                data = str(resp.json())
                data_dict = ast.literal_eval(data)
                status = data_dict['status']

                if data_dict['status'] == 'error':

                    return False
                
                else:
                    return True

            else:
                return True
    
    def query_status_error(self, request):
        """Query error detail of error status from celery

        Args:
            request: request data

        Returns:
            status: status
        """

        operations = Operation.objects.filter(robotnumber='1')
        for i in operations:

            uuid = str(i.uuid)
            resp = requests.get(CELERY_APP + '/result?id=' + uuid)
            data = str(resp.json())
            data_dict = ast.literal_eval(data)
            error = 'error_' + data_dict['error']

            return HttpResponse(error)