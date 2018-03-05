"""Validation errors
"""
import ast
import requests

from django.http import JsonResponse

from webapp.models import Operation
from webapp.views import CELERY_APP


class ValidateError(object):

    @staticmethod
    def check_current_status():
        """Check current status from celery

        Returns:
            status (string): status
        """

        status = 'no_uuid'
        uuid = None

        operations = Operation.objects.all()
        for i in operations:
            uuid = str(i.uuid)

        if uuid is not None:
            resp = requests.get(CELERY_APP + '/result?id=' + uuid)
            data = str(resp.json())
            data_dict = ast.literal_eval(data)
            status = data_dict['status']
            return status

        else:
            return status

    @staticmethod
    def query_status_error():
        """Query error detail of error status from celery

        Args:
            request: request data

        Returns:
            status (string): status
        """

        error = 'no uuid in operations table'
        status = 'error'
        uuid = None

        operations = Operation.objects.all()
        for i in operations:
            uuid = str(i.uuid)

        if uuid is not None:
            resp = requests.get(CELERY_APP + '/result?id=' + uuid)
            data = str(resp.json())
            data_dict = ast.literal_eval(data)
            error = data_dict['error']
            status = data_dict['status']

        return JsonResponse({'status': status, 'error': error})
