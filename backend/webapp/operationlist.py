"""operationlist api
"""
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.models import Operation
from webapp.serializers import OperationSerializer
from webapp.libs import operation_action_database

# set operation_action_databases
operation_action_databases = operation_action_database.OperationAction

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

        if 'action' in request.data and 'clear_latest_operation' in request.data['action']:
            return operation_action_databases.clear_latest_operation()

        else:
            error_detail = {'detail': 'Method "POST" not allowed.'}
            return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def put(self, request):
        """PUT OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
