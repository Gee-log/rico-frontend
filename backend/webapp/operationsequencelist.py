"""operationsequencelist api
"""
from rest_framework.response import Response
from rest_framework.views import APIView, status
from rest_framework.parsers import JSONParser

from webapp.models import OperationSequence
from webapp.serializers import OperationSequenceSerializer


class OperationSequencelist(APIView):

    def get(self, request):
        """GET OperationSequenceList API

        Args:
            request: request data

        Returns:
            Json: Operation data
        """

        operationsequences = OperationSequence.objects.all()
        serializer = OperationSequenceSerializer(operationsequences, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST OperationSequenceList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        request_data = JSONParser().parse(request)
        serializers = OperationSequenceSerializer(data=request_data)
        if serializers.is_valid():
            sequence_number = request_data['sequence_number']
            total_sequence = request_data['total_sequence'] 

            operationsequences = OperationSequence.objects.all()

            if len(operationsequences) > 0:
                operationsequences = OperationSequence.objects.all()
                operationsequences.update(sequence_number=sequence_number, total_sequence=total_sequence)

            else:
                operationsequences = OperationSequence.objects.create(sequence_number=sequence_number, total_sequence=total_sequence)
                operationsequences.save()  

            return Response(serializers.data, status=status.HTTP_201_CREATED)

        else:
            error_detail = {'detail': 'Invalid input.'}
            return Response(error_detail, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """PUT OperationSequenceList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationSequenceList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
