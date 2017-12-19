"""operationhistorylist api
"""
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.operationhistory_action_database import GetLatestTime
from webapp.models import OperationHistory
from webapp.serializers import OperationHistorySerializer


class OperationHistoryList(APIView):

    def get(self, request):
        """GET OperationHistoryList API

        Args:
            request: request data

        Returns:
            Json: OperationHistory data
        """

        if 'action' in request.GET and request.GET['action'] == 'connection_time':
            return GetLatestTime.calculation_latest_operation_time()

        else:
            operationhistorys = OperationHistory.objects.all()
            serializer = OperationHistorySerializer(
                operationhistorys, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST OperationHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "POST" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def put(self, request):
        """PUT OperationHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
