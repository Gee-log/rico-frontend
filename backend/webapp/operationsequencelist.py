"""operationsequencelist api
"""
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView, status

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
        if 'sequence_number' and 'total_sequence' in request_data:
            sequence_number = request_data['sequence_number']
            total_sequence = request_data['total_sequence'] 

            operationsequences = OperationSequence.objects.all()

            if len(operationsequences) > 0:
                operationsequences = OperationSequence.objects.all()
                operationsequences.update(sequence_number=sequence_number, total_sequence=total_sequence)
            else:
                operationsequences = OperationSequence.objects.create(sequence_number=sequence_number, total_sequence=total_sequence)
                operationsequences.save()  

            return_data = {'status': 'success'}
            return Response(return_data, status=status.HTTP_201_CREATED)

        return_data = {'detail': 'Invalid input.'}
        return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """PUT OperationSequenceList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE OperationSequenceList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
