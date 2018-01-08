"""operationsequencelist api
"""
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

        if 'sequence_number' in request.data:
            
            sequence_number = request.data['sequence_number']
            
            operationsequence_object = OperationSequence.objects.all()

            if operationsequence_object is None:
                operationsequences = OperationSequence.objects.create(sequence_number=sequence_number)
                operationsequences.save()

            else:
                operationsequences = OperationSequence.objects.update(sequence_number=sequence_number)
                operationsequences.save()                    

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