"""operationhistorylist api
"""
from rest_framework.views import APIView
from rest_framework.response import Response
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

        operationhistorys = OperationHistory.objects.all()
        serializer = OperationHistorySerializer(operationhistorys, many=True)

        return Response(serializer.data)
