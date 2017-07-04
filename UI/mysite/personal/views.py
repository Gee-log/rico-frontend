from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, Http404
from django.shortcuts import render, redirect
from personal.models import Connection, Port, Alarm, ConnectionHistory, Operation
from personal.serializers import PortSerializer, ConnectionSerializer, AlarmSerializer, ConnectionHistorySerializer, OperationSerializer
from datetime import datetime
from django.utils import timezone
from django.contrib.auth import authenticate, get_user_model, login, logout
from personal.forms import UserLoginForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect
import requests


def login_view(request):

    print(request.user.is_authenticated())
    next = request.GET.get('next')
    title = "Login"
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        login(request, user)
        if next:
            return redirect(next)
        return render(request, 'personal/index.html')
    return render(request, 'personal/login.html', {"form": form, "title": title})


@login_required(login_url='/login/')
def index(request):

    return render(request, 'personal/index.html')

@login_required(login_url='/login/')
def robot(request):

    return render(request, 'personal/robot_debug.html')

@login_required(login_url='/login/')
@csrf_protect
def portconnection(request):

    if request.method == 'POST':
        east = request.POST['east']
        west = request.POST['west']

        Connection.objects.create(
            east=east,
            west=west
        )

    data = Port.objects.all()
    data2 = Connection.objects.all()
    return render(request, 'personal/portconnection.html', {"data": data, "data2": data2})


@login_required(login_url='/login/')
def connection(request):

    return render(request, 'personal/connection.html')


@login_required(login_url='/login/')
def setting(request):

    return render(request, 'personal/setting.html')


@login_required(login_url='/login/')
def alarm(request):

    return render(request, 'personal/alarm.html')


@login_required(login_url='/login/')
def alarm_history(request):

    return render(request, 'personal/alarm_history.html')


@login_required(login_url='/login/')
def test(request):

    r = requests.get('http://192.168.60.73:5555')
    r.text
    return HttpResponse(r)


@login_required(login_url='/login/')
def save(request, question_id, timestamp=0):

    import StringIO
    import csv

    qus = question_id

    print('question_id', question_id, 'timestamp', timestamp)

    # write file
    data = StringIO.StringIO()
    # load file
    data.seek(0)
    response = HttpResponse(data, content_type='text/csv')
    if qus == '1':  # connection_log
        download_name = 'connection_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        connection = ConnectionHistory.objects.all()
        writer.writerow(['Time', 'Type', 'East Port', 'West Port'])
        for con in connection:
            if con.switching_type == 'C':
                writer.writerow(
                    [timezone.localtime(con.timestamp), 'connected', con.east, con.west])

            else:
                writer.writerow(
                    [timezone.localtime(con.timestamp), 'disconnected', con.east, con.west])

    elif qus == '2':  # current_alarm_log
        download_name = 'current_alarm_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        s = datetime.fromtimestamp(float(timestamp) / 1000)
        now = datetime.now()
        connection = Alarm.objects.filter(timestamp__range=(s, now))
        writer.writerow(['Alarm', 'Detail', 'Time'])
        for con in connection:
            writer.writerow(
                [con.alarm, con.detail, timezone.localtime(con.timestamp)])

    elif qus == '3':  # alarmHistory_log
        download_name = 'alarmHistory_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        connection = Alarm.objects.all()
        writer.writerow(['Alarm', 'Detail', 'Time'])
        for con in connection:
            writer.writerow(
                [con.alarm, con.detail, timezone.localtime(con.timestamp)])

    return response


class PortList(APIView):

    def get(self, request):

        ports = Port.objects.all()
        serializer = PortSerializer(ports, many=True)
        return Response(serializer.data)

    def post(self, request):

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

        if request.user.is_superuser or request.user.is_staff:
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
        print('connection_history', east, west)
        payload = {'east': east.number, 'west': west.number, 'action': "connect"}
        req = requests.post('http://192.168.60.73:8000/app1/connect', data=payload)
        print('payload', east.number, west.number, 'action : connect')
        uuid = req.text
        print('UUID:', uuid)
        req2 = requests.get('http://192.168.60.73:8000/app1/result?id=' + uuid)
        status = req2.text
        print(status)
        operation_conn = Operation.create('1', uuid, status, 'JSON')
        operation_conn.save()
        return Response(request.data)

    def disconnect(self, request):
        if request.user.is_superuser or request.user.is_staff:
            east, west = self.get_available_ports(request)

            print('disconnection', east, west)
            if east == None:
                return Response('No east port number ' + str(e), content_type="text/plain")
            if west == None:
                return Response('No west port number ' + str(w), content_type="text/plain")

            # create disconnection
            conns = Connection.objects.all().filter(disconnected_date=None)
            for c in conns:
                print(c)
                if c.east == east and c.west == west:
                    c.disconnected_date = datetime.now()
                    c.save()
                    connection_history = ConnectionHistory.create(east, west, 'D')
                    connection_history.save()
                    print('disconnect', c)
                    payload = {'east': east.number, 'west': west.number, 'action': "disconnect"}
                    req = requests.post('http://192.168.60.73:8000/app1/disconnect', data=payload)
                    print('payload', east.number, west.number, 'action : disconnect')
                    uuid = req.text
                    print('UUID:', uuid)
                    while True:
                        req2 = requests.get('http://192.168.60.73:8000/app1/result?id=' + uuid)
                        status = req2.text
                        print(status)
                        operation_disconn = Operation.create('1', uuid, status, 'JSON')
                        operation_disconn.save()
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

        print(request.GET)
        if 'since' in request.GET:
            s = datetime.fromtimestamp(float(request.GET['since']))
            now = datetime.now()
            alarms = Alarm.objects.filter(timestamp__range=(s, now))
            print('alarms', len(alarms))
        else:
            alarms = Alarm.objects.all()

        serializer = AlarmSerializer(alarms, many=True)
        return Response(serializer.data)

    def post(self, request):

        alarm = Alarm.create(
            request.data["alarm"], request.data["detail"], request.data["severity"])
        alarm.save()
        return Response(request.data)

class OperationList(APIView):

    def get(self, request):

        operations = Operation.objects.all()
        serializer = OperationSerializer(operations, many=True)
        return Response(serializer.data)

