"""operationlist api
"""
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.operation_action_database import OperationAction
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        request_data = JSONParser().parse(request)
        
        if 'action' in request_data:        
            action = request_data['action']
            
            if action == 'clear_latest_operation':
                return OperationAction.clear_latest_operation()
            else:
                return_data = {'detail': 'Invalid action.'}
                return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        else:
            return_data = {'detail': 'Method "POST" not allowed.'}
            return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def put(self, request):
        """PUT OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
