"""alarmlist api
"""
from datetime import datetime
from rest_framework.response import Response
from rest_framework.views import APIView, status

from webapp.libs.authorization import ValidationUser
from webapp.models import Alarm
from webapp.serializers import AlarmSerializer


class AlarmList(APIView):

    def get(self, request):
        """GET AlarmList API

        Args:
            request: request data

        Returns:
            json:
                alarm (string): alarm type
                timestamp (datetime): timestamp
                detail (string): alarm's detail
                severity (string): severity
        """

        if 'since' in request.GET:
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
