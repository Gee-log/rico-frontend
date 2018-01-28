"""Validate User
"""
from django.contrib.auth.models import User

from rest_framework.authtoken.models import Token

from webapp.models import Role


class ValidationUser(object):

    @staticmethod
    def validate_http_authorization(request):

        # Validate authorization
        if request.META.get('HTTP_AUTHORIZATION'):

            # Set token
            token = request.META.get('HTTP_AUTHORIZATION')

            # Check token is exist in database or not
            if ValidationUser.validate_token(token) is True:
                return True

            else:
                return False
        
        else:
            return False

    @staticmethod
    def validate_token(token):

        if Token.objects.filter(key=token):
            return True

        else:
            return False


class ValidateUserRole(object):
    
    @staticmethod
    def validate_role(request):

        token = request.META.get('HTTP_AUTHORIZATION')
        token_object = Token.objects.filter(key=token)

        for i in token_object:
            username = i.user

        user_object = User.objects.filter(username=username)
        role_object = Role.objects.filter(user=user_object)

        for r in role_object:
            user_role = r.role

        if user_role == 'Admin' or user_role == 'Staff':
            return True
        
        else:
            return False
