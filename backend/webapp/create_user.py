"""create user
"""
import re
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView, status


class CreateUser(APIView):

    def get(self, request):
        """GET Create User API 

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "POST" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        """POST Verify User API

        Args:
            request: request data

        Returns:
            Json: OperationHistory data
        """

        if 'email' in request.data and 'username' in request.data and 'password' in request.data:
            email = request.data['email']
            username = request.data['username']
            password = request.data['password']

            if User.objects.filter(email=email):
                return JsonResponse({'status': 'error', 'error': 'this email has been used'})

            if User.objects.filter(username=username):
                return JsonResponse({'status': 'error', 'error': 'this user already exist'})

            if '@' not in email and '.' not in email:
                return JsonResponse({'status': 'error', 'error': 'invalid email format'})

            if re.match("^[A-Za-z0-9_-]*$", username) and re.match("^[A-Za-z0-9_-]*$", password):
                user = User.objects.create_user(username, email, password, is_staff=True)
                user.save()
                return JsonResponse({'status': 'success', 'detail': 'user created'})

            else:
                return JsonResponse({'status': 'error', 'error': 'invalid username or password format'})

        elif 'email' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'no email data'})
        
        elif 'username' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'no username data'})
            
        elif 'password' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'no password data'})
            
        else:
            return JsonResponse({'status': 'error', 'error': 'invalid input data'})

    def put(self, request):
        """PUT Create User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE Create User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)