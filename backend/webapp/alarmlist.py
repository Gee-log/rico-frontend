from rest_framework.views import APIView
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
            Json: AlarmList data
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
            Json: AlarmList data
        """
        alarms = Alarm.create(
            request.data["alarm"], request.data["detail"], request.data["severity"])
        alarms.save()

        return Response(request.data)

