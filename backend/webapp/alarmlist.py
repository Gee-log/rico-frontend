"""alarmlist api
"""
import json
import logging.handlers

from datetime import datetime
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.authorization import ValidationUser
from webapp.models import Alarm
from webapp.serializers import AlarmSerializer

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('alarm')

# create a file handler
handler = logging.handlers.RotatingFileHandler('alarm.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class AlarmList(APIView):

    def get(self, request):
        """GET AlarmList API

        Args:
            request: request data

        Returns:
            json:
                alarm (string): alarm's type
                timestamp (datetime): timestamp
                detail (string): alarm's detail
                severity (string): severity
        """

        request_data = json.dumps(request.GET)
        request_data = json.loads(request_data)

        if 'since' in request_data:
            since = datetime.fromtimestamp(float(request.GET['since']))
            now = datetime.now()
            alarms = Alarm.objects.filter(timestamp__range=(since, now))
        else:
            alarms = Alarm.objects.all()

        serializer = AlarmSerializer(alarms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """POST AlarmList API

        Args:
            request: request data

        Returns:
            json:
                alarm (string): alarm type
                timestamp (datetime): timestamp
                detail (string): alarm's detail
                severity (string): severity
        """

        if ValidationUser.validate_http_authorization(request) is True:

            # incorrect format
            alarms = Alarm.create(request.data["alarm"], request.data["detail"], request.data["severity"])
            alarms.save()
            return Response(request.data, status=status.HTTP_200_OK)

        else:
            return_data = {'detail': 'Permission denied'}
            return Response(return_data, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request):
        """PUT AlarmList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE AlarmList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
