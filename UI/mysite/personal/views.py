from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.views.generic import View
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.template.response import TemplateResponse
from personal.models import Connection, Port, Alarm, Datalog
from personal.serializers import PortSerializer, ConnectionSerializer, AlarmSerializer, DatalogSerializer


def index(request):
    return render(request, 'personal/header.html')


def portconnection(request):
    data = Port.objects.all()
    data2 = Connection.objects.all()
    return TemplateResponse(request, 'personal/portconnection.html', {"data": data, "data2": data2})


def connection(request):
    data = Connection.objects.all()
    return TemplateResponse(request, 'personal/connection.html', {"data": data})


def setting(request):
    return render(request, 'personal/setting.html')


def alarm(request):
    return render(request, 'personal/alarm.html')


def alarm_history(request):
    return render(request, 'personal/alarm_history.html')


class PortList(APIView):

    def get(self, request):
        ports = Port.objects.all()
        serializer = PortSerializer(ports, many=True)
        return Response(serializer.data)

    def post(self, request):
        return Response(request.data)


class DatalogList(APIView):

    def get(self, request):
        logs = Datalog.objects.all()
        serializer = DatalogSerializer(logs, many=True)
        return Response(serializer.data)

    def post(self, request):
        datalog = Datalog.create(request.data["title"], request.data["body"])
        datalog.save()
        return Response(request.data)



class ConnectionList(APIView):

    def get(self, request):
        datas = Connection.objects.all()
        serializer = ConnectionSerializer(datas, many=True)
        return Response(serializer.data)

    def post(self, request):
        east, west = None, None
        ports = Port.objects.all()
        # for p in ports:
            # if p.direct = e
        # connection = Connection.create(request.data["east"], request.data["west"])
        # connection.save()
        # return Response(request.data)


class AlarmList(APIView):

    def get(self, request):
        alarms = Alarm.objects.all()
        serializer = AlarmSerializer(alarms, many=True)
        return Response(serializer.data)

    def post(self, request):
        return Response(request.data)

# class MyView(View):

#     def get(self, request, *args, **kwargs):
#         return HttpResponse('This is GET request')

#     def post(self, request, *args, **kwargs):
#         return HttpResponse('This is POST request')
