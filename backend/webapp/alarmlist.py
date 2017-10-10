"""alarmlist api
"""
from rest_framework.views import APIView, status
from rest_framework.response import Response
from webapp.models import Alarm
from webapp.serializers import AlarmSerializer
from datetime import datetime


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

        print(request.GET)

        if 'since' in request.GET:
            since = datetime.fromtimestamp(float(request.GET['since']))
            now = datetime.now()
            alarms = Alarm.objects.filter(timestamp__range=(since, now))
            print('alarms', len(alarms))

        else:
            alarms = Alarm.objects.all()

        serializer = AlarmSerializer(alarms, many=True)

        return Response(serializer.data)

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
        alarms = Alarm.create(request.data["alarm"], request.data["detail"], request.data["severity"])
        alarms.save()

        return Response(request.data)

    def put(self, request):
        """PUT AlarmList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE AlarmList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
