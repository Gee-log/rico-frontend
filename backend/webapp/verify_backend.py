"""verify backend
"""
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
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

        error_detail = {'detail': 'Method "GET" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        """POST Verify User API

        Args:
            request: request data

        Returns:
            Json: verify's status
        """
        if 'token' in request.data:
            token = request.data['token']
            token = token['token']
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
                return JsonResponse({'status': 'verified'}, status=status.HTTP_200_OK)

            else:
                return JsonResponse({'status': 'unverified'}, status=status.HTTP_200_OK)
        
        else:
            error_detail = {'detail': 'Invalid input variables.'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        """PUT Verify User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE Verify User API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)