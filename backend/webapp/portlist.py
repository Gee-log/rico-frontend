"""portlist api
"""
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from webapp.models import Port
from webapp.serializers import PortSerializer


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

        return Response(serializer.data)

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

        # Validate authorization
        if request.META.get('HTTP_AUTHORIZATION'):
            
            # Set token
            token = request.META.get('HTTP_AUTHORIZATION')

            # Check token is exist in database or not
            if Token.objects.all().filter(key=token):
                
                serializer = PortSerializer(data=request.data)
                
                if serializer.is_valid():

                    if Port.objects.filter(direction=request.data['direction'], number=request.data['number']):
                    
                        error_detail = {'error': 'This port already exist in database.'}
                        
                        return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)
                    
                    else: 
                        serializer.save()        
                        return Response(serializer.data, status=status.HTTP_201_CREATED)

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            else:

                error_detail = {'detail': 'Permission denied'}
                return Response(error_detail, status=status.HTTP_401_UNAUTHORIZED)

        else:
                    
            error_detail = {'detail': 'Permission denied'}
            return Response(error_detail, status=status.HTTP_401_UNAUTHORIZED)   

    def put(self, request):
        """PUT PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
