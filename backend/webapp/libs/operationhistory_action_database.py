"""operationhistory action database
"""
from datetime import datetime
from rest_framework import status
from rest_framework.response import Response

from webapp.models import OperationHistory


class GetLatestTime(object):

    @staticmethod
    def get_time():
        """Get time's variables from Operationhistorys

        Returns:
            created_time (datetime): created times of latest operation
            finished_time (datetime): finished times of latest operation
        """

        operationhistorys = OperationHistory.objects.all().exclude(finished_time=None)

        if operationhistorys.exists():
            operationhistorys = operationhistorys.order_by('-finished_time')[:1]

            for i in operationhistorys:

                created_time = i.created_time
                finished_time = i.finished_time

                return_data = {'created_time': created_time, 'finished_time': finished_time}
                return Response(return_data, status=status.HTTP_200_OK)

        else:
            return_data = {'created_time': '0', 'finished_time': '0'}
            return Response(return_data, status=status.HTTP_200_OK)
