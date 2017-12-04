"""Validate User
"""
from rest_framework.authtoken.models import Token


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

    @staticmethod
    def validate_token(token):

        if Token.objects.filter(key=token):
            return True

        else:
            return False
