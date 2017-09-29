"""operationlist api
"""
from rest_framework.views import APIView
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
