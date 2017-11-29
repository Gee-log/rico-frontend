"""operationhistorylist api
"""
from datetime import datetime
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView, status

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
            operationhistorys = OperationHistory.objects.all()

            if operationhistorys.exists():

                lastest_obj = OperationHistory.objects.all().order_by('-finished_time')[:1]
                
                for i in lastest_obj:
                
                    if i.finished_time is None:
                        return JsonResponse({'average_hours': 0, 'average_minute': 0, 'average_second': 0})
                    
                    created_time = i.created_time
                    created_time = datetime.time(created_time)
                    created_time = str(created_time)
                    finished_time = i.finished_time
                    finished_time = datetime.time(finished_time)
                    finished_time = str(finished_time)
                    created_hours = created_time[:2]
                    created_hours = int(created_hours)
                    created_minute = created_time[3:5]
                    created_minute = int(created_minute)
                    created_second = created_time[6:8]
                    created_second = int(created_second)
                    finished_hours = finished_time[:2]
                    finished_hours = int(finished_hours)
                    finished_minute = finished_time[3:5]
                    finished_minute = int(finished_minute)
                    finished_second = finished_time[6:8]
                    finished_second = int(finished_second)
                    
                    average_hours = finished_hours - created_hours
                    average_minute = finished_minute - created_minute
                    average_second = finished_second - created_second
                    if (average_second < 0):
                        average_minute = average_minute - 1
                        average_second = (finished_second + 60) - created_second

                return JsonResponse({'average_hours': average_hours, 'average_minute': average_minute, 'average_second': average_second})
            
            else:
                return JsonResponse({'average_hours': 0, 'average_minute': 0, 'average_second': 0})

        else:
            operationhistorys = OperationHistory.objects.all()
            serializer = OperationHistorySerializer(operationhistorys, many=True)

            return Response(serializer.data)

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
