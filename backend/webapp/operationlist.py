"""operationlist api
"""
from rest_framework.views import APIView, status
from rest_framework.response import Response
from webapp.models import Operation
from webapp.serializers import OperationSerializer


class OperationList(APIView):

    def get(self, request):
        """GET OperationList API

        Args:
            request: request data

        Returns:
            Json: Operation data
        """

        operations = Operation.objects.all()
        serializer = OperationSerializer(operations, many=True)

        return Response(serializer.data)

    def post(self, request):
        """POST OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def put(self, request):
        """PUT OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'error': 'HTTP_405_METHOD_NOT_ALLOWED'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
