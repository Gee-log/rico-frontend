"""verify user
"""
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.models import Role


class VerifyUser(APIView):
    
    def get(self, request):
        """GET Verify User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "GET" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        """POST Verify User API

        Args:
            request: request data

        Returns:
            Json: verify's status
        """

        request_data = JSONParser().parse(request)

        if 'token' in request_data:
            token = request_data['token']
            # username = ''

            # token_object = Token.objects.filter(key=token)
            
            # for i in token_object:
                # username = i.user

            # username_object = User.objects.get(username=username)

            # role_object = Role.objects.filter(user=username_object)
            # for i in role_object:
                # user_status = i.status

            # if user_status == 'Offline':
            #     role_object.update(status='Online')

            if Token.objects.filter(key=token):
                return_data = {'status': 'verified'}
                return Response(return_data, status=status.HTTP_200_OK)

            else:
                return_data = {'status': 'unverified'}
                return Response(return_data, status=status.HTTP_200_OK)
        
        else:
            return_data = {'detail': 'Invalid input.'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        """PUT Verify User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE Verify User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
