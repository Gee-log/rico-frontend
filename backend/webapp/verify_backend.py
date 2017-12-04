"""verify backend
"""
from django.http import JsonResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView, status


class VerifyUser(APIView):
    
    def get(self, request):
        """GET Verify User API

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
            Json: verify's status
        """
        if 'token' in request.data:
            token = request.data['token']
            token = token['token']

            if Token.objects.all().filter(key=token):
                return JsonResponse({'status': 'verified'})

            else:
                return JsonResponse({'status': 'unverified'})
        
        else:
            error_detail = {'detail': 'Method "POST" not allowed.'}
            return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
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