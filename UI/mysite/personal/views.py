from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from personal.models import Connection, Port, Alarm, Datalog, ConnectionHistory
from personal.serializers import PortSerializer, ConnectionSerializer, AlarmSerializer, DatalogSerializer, ConnectionHistorySerializer
from datetime import datetime

def index(request):
    return render(request, 'personal/header.html')

@csrf_exempt
def portconnection(request):
    if request.method == 'POST':
        east = request.POST['east']
        west = request.POST['west']

        Connection.objects.create(
            east = east,
            west = west
        )

        return HttpResponse('')

    data = Port.objects.all()
    data2 = Connection.objects.all()
    return TemplateResponse(request, 'personal/portconnection.html', {"data": data, "data2": data2})

def connection(request):
    data_list = ConnectionHistory.objects.all()
    paginator = Paginator(data_list, 15)

    page = request.GET.get('page')
    try:
        data = paginator.page(page)
    except PageNotAnInteger:
        data = paginator.page(1)
    except EmptyPage:
        data = paginator.page(paginator.num_pages)

    context = {
        "object_list": data,
    }
    return render(request, 'personal/connection.html', context)
    # return render(request, 'personal/connection.html', {"data": data})

def setting(request):
    return render(request, 'personal/setting.html')

def alarm(request):
    data = Alarm.objects.all()
    return render(request, 'personal/alarm.html', {"data": data})

def alarm_history(request):
    data_list = Alarm.objects.all()
    paginator = Paginator(data_list, 15)

    page = request.GET.get('page')
    try:
        data = paginator.page(page)
    except PageNotAnInteger:
        data = paginator.page(1)
    except EmptyPage:
        data = paginator.page(paginator.num_pages)

    context = {
        "object_list": data,
    }
    return render(request, 'personal/alarm_history.html', context)
    # return render(request, 'personal/alarm_history.html', {"data": data})

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
        print('ConnectionList get', request.GET)
        if 'act' in request.GET and request.GET['act'] == 'connected':
            conns = Connection.objects.all().filter(disconnected_date=None)
            obj = dict()
            for c in conns:
                obj[str(c.east)] = str(c.west)
            return Response(obj)
        datas = Connection.objects.all()
        serializer = ConnectionSerializer(datas, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        # validate inputs
        if 'action' not in request.data:
            return Response('No action', content_type="text/plain")

        if 'east' not in request.data:
            return Response('No east', content_type="text/plain")

        if 'west' not in request.data:
            return Response('No west', content_type="text/plain")

        if request.data['action'] == 'disconnect':
            return self.disconnect(request)
        else:
            return self.create_connection(request)

    def create_connection(self, request):
        east, west = self.get_available_ports(request)

        print('connection', east, west)
        if east == None:
            return Response('No east port number ' + str(e), content_type="text/plain")
        if west == None:
            return Response('No west port number ' + str(w), content_type="text/plain")

        # create connection
        connection = Connection.create(east, west)
        connection.save()
        connection_history = ConnectionHistory.create(east, west, 'C')
        connection_history.save()
        return Response(request.data)


    def disconnect(self, request):
        east, west = self.get_available_ports(request)

        print('disconnection', east, west)
        if east == None:
            return Response('No east port number ' + str(e), content_type="text/plain")
        if west == None:
            return Response('No west port number ' + str(w), content_type="text/plain")

        # create connection
        conns = Connection.objects.all().filter(disconnected_date=None)
        for c in conns:
            print(c)
            if c.east == east and c.west == west:
                c.disconnected_date = datetime.now()
                c.save()
                connection_history = ConnectionHistory.create(east, west, 'D')
                connection_history.save()
                print('disconnect', c)

        return Response(request.data)

    def get_available_ports(self, request):
        east, west = None, None

        e = int(request.data['east'])
        w = int(request.data['west'])

        # find available ports
        ports = Port.objects.all()
        for p in ports:
            if p.direction == 'E' and p.number == e:
                east = p
                print('east', east)
            if p.direction == 'W' and p.number == w:
                west = p
                print('west', west)

        return east, west

class ConnectionHistoryList(APIView):

    def get(self, request):
        connHistory = ConnectionHistory.objects.all()
        serializer = ConnectionHistorySerializer(connHistory, many=True)
        return Response(serializer.data)

class AlarmList(APIView):

    def get(self, request):
        print (request.GET)
        if 'since' in request.GET:
            s = datetime.fromtimestamp(float(request.GET['since']))
            now = datetime.now()
            alarms = Alarm.objects.filter(timestamp__range=(s,now))
            print('alarms', len(alarms))
        else:
            alarms = Alarm.objects.all()

        serializer = AlarmSerializer(alarms, many=True)
        return Response(serializer.data)

    def post(self, request):
        alarm = Alarm.create(request.data["alarm"], request.data["detail"])
        alarm.save()
        return Response(request.data)