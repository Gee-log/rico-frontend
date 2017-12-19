"""portlist api
"""
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.models import Role
from webapp.serializers import RoleSerializer


class RoleList(APIView):

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

        roles = Role.objects.all()
        serializer = RoleSerializer(roles, many=True)
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

        # if request.data['action'] == 'logout' and request.data['token']:
        #     token = request.data['token']
        #     token = token['token']

        #     token_object = Token.objects.get(key=token)
        #     username = token_object.user

        #     role_object = Role.objects.filter(user=username)
        #     role_object.update(status='Offline')

        #     return JsonResponse({'status': 'success', 'detail': 'logout success'})

        # else:
        #     error_detail = {'detail': 'Invalid input.'}
        #     return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)
        
        error_detail = {'detail': 'Method "POST" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
            

    def put(self, request):
        """PUT PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE PortList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "DELETE" not allowed.'}        
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
