"""operationhistory action database
"""
from datetime import datetime
from django.http import JsonResponse
from rest_framework import status

from webapp.models import OperationHistory


class GetLatestTime(object):

    @staticmethod
    def get_time():
        """Get time's variables from Operationhistorys

        Returns:
            created_time_hours (integer): created hours of latest operation
            created_time_minute (integer): created minute of latest operation
            created_time_second (integer): created second of latest operation
            finished_time_hours (integer): finished hours of latest operation
            finished_time_minute (integer): finished minute of latest operation
            finished_time_second (integer): finished second of latest operation
        """

        operationhistorys = OperationHistory.objects.all().exclude(finished_time=None)

        if operationhistorys.exists():
            operationhistorys = operationhistorys.order_by('-finished_time')[:1]

            for i in operationhistorys:

                created_time = i.created_time
                created_time = datetime.time(created_time)
                created_time = str(created_time)
                finished_time = i.finished_time
                finished_time = datetime.time(finished_time)
                finished_time = str(finished_time)
                created_time_hours = created_time[:2]
                created_time_hours = int(created_time_hours)
                created_time_minute = created_time[3:5]
                created_time_minute = int(created_time_minute)
                created_time_second = created_time[6:8]
                created_time_second = int(created_time_second)
                finished_time_hours = finished_time[:2]
                finished_time_hours = int(finished_time_hours)
                finished_time_minute = finished_time[3:5]
                finished_time_minute = int(finished_time_minute)
                finished_time_second = finished_time[6:8]
                finished_time_second = int(finished_time_second)

                return created_time_hours, created_time_minute, created_time_second, finished_time_hours,\
                    finished_time_minute, finished_time_second

        else:
            return False

    @staticmethod
    def calculation_latest_operation_time():
        """Calculating average latest operation's time

        Returns:
            average_hours (integer): average time's hours of latest operation
            average_minute (integer): average time's minute of latest operation
            average_second (integer): average time's second of latest operation
        """

        if GetLatestTime.get_time() is False:
            return JsonResponse({'average_hours': 0, 'average_minute': 0, 'average_second': 0},
                                status=status.HTTP_200_OK)

        else:
            created_time_hours, created_time_minute, created_time_second, finished_time_hours, finished_time_minute,\
                finished_time_second = GetLatestTime.get_time()

            average_hours = finished_time_hours - created_time_hours
            average_minute = finished_time_minute - created_time_minute
            average_second = finished_time_second - created_time_second

            if average_minute > 0 > average_second:
                average_minute = average_minute - 1
                average_second = (finished_time_second + 60) - created_time_second

            elif average_minute <= 0 > average_second:
                average_minute = 0
                average_second = abs(average_second)

            elif average_minute <= 0 < average_second:
                average_minute = 0

            return JsonResponse({'average_hours': average_hours, 'average_minute': average_minute, 'average_second':
                                 average_second}, status=status.HTTP_200_OK)
