"""portlist api
"""
import logging.handlers

from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.authorization import ValidationUser
from webapp.models import Port
from webapp.serializers import PortSerializer

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('portlist')

# create a file handler
handler = logging.handlers.RotatingFileHandler('portlist.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class PortList(APIView):

    def get(self, request):
        """GET PortList API

        Args:
            request: request data

        Returns:
            json:
                direction (string): direction of port
                number (integer): port number
                note (string): note of port
                id (integer): id of object
        """

        ports = Port.objects.all()
        serializer = PortSerializer(ports, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST PortList API

        Args:
            request: request data

        Returns:
            json:
                direction (string): direction of port
                number (integer): port number
                note (string): note of port
                id (integer): id of object
        """

        if ValidationUser.validate_http_authorization(request) is True:
                serializer = PortSerializer(data=request.data)
                
                if serializer.is_valid():

                    if Port.objects.filter(direction=request.data['direction'], number=request.data['number']):
                        return_data = {'error': 'This port already exist in database.'}
                        logger.error('post method: error:{} request:{}'.format(return_data, request.data))
                        return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
                    
                    else: 
                        serializer.save()
                        logger.info('post method: saved request:{}'.format(request.data))
                        return Response(serializer.data, status=status.HTTP_201_CREATED)

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return_data = {'detail': 'Permission denied'}
            logger.error('validate_user.validate_http_authorization method: error:{} request:{}'.format(
                return_data, request.META.get('HTTP_AUTHORIZATION')))
            return Response(return_data, status=status.HTTP_401_UNAUTHORIZED)   

    def put(self, request):
        """PUT PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        return_data = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
