"""create user
"""
import re

from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.models import Role


class CreateUser(APIView):

    def get(self, request):
        """GET Create User API 

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "POST" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        """POST Verify User API

        Args:
            request: request data

        Returns:
            Json: OperationHistory data
        """

        request_data = JSONParser().parse(request)

        if 'email' and 'username' and 'password' in request_data:
            # if 'email' in request_data and 'username' in request_data and 'password' in request_data:
            email = request_data['email']
            username = request_data['username']
            password = request_data['password']

            if User.objects.filter(email=email):
                return_data = {'status': 'error', 'error': 'this email has been used'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=username):
                return_data = {'status': 'error', 'error': 'this user already exist'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

            if '@' not in email and '.' not in email:
                return_data = {'status': 'error', 'error': 'invalid email format'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

            if re.match("^[A-Za-z0-9_-]*$", username) and re.match("^[A-Za-z0-9_-]*$", password):
                # default role is staff
                user = User.objects.create_user(username, email, password, is_staff=True)
                user.save()
                username_object = User.objects.get(username=username)
                roles = Role.objects.create(user=username_object, role='Staff')
                roles.save()
                return_data = {'status': 'success', 'detail': 'user created'}
                return Response(return_data, status=status.HTTP_201_CREATED)

            else:
                return_data = {'status': 'error', 'error': 'invalid username or password format'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        elif 'email' not in request_data:
            return_data = {'status': 'error', 'error': 'no email data'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
        
        elif 'username' not in request_data:
            return_data = {'status': 'error', 'error': 'no username data'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
            
        elif 'password' not in request_data:
            return_data = {'status': 'error', 'error': 'no password data'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
            
        else:
            return_data = {'status': 'error', 'error': 'invalid input data'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """PUT Create User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE Create User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
