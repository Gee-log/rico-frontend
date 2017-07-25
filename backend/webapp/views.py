from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from webapp.models import Connection, Port, Alarm, ConnectionHistory, Operation, OperationHistory
from webapp.serializers import PortSerializer, ConnectionSerializer, AlarmSerializer, ConnectionHistorySerializer, OperationSerializer, OperationHistorySerializer
from datetime import datetime
from django.utils import timezone
from django.contrib.auth import authenticate, get_user_model, login, logout
# from personal.forms import UserLoginForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect
import ast
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


# @login_required(login_url='/login/')
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


# @login_required(login_url='/login/')
def connection(request):

    return render(request, 'personal/connection.html')


# @login_required(login_url='/login/')
def setting(request):

    return render(request, 'personal/setting.html')


# @login_required(login_url='/login/')
def alarm(request):

    return render(request, 'personal/alarm.html')


# @login_required(login_url='/login/')
def alarm_history(request):

    return render(request, 'personal/alarm_history.html')


# @login_required(login_url='/login/')
def checkstatus(request, uuid):

    action = ""
    sequence = None
    resp = requests.get('http://192.168.60.73/app1/result?id=' + uuid)
    data = str(resp.json())
    data_dict = ast.literal_eval(data)
    status = data_dict['status']
    print('Status:', status)

    if status == 'success':
        response = data_dict['response']
        east = data_dict['request']['east']
        west = data_dict['request']['west']
        action = data_dict['request']['action']
        sequence = None
        if response is None:
            ports = Port.objects.all()
            for i in ports:
                if i.direction == 'E' and i.number == east:
                    east = i
                    print('east', east)
                if i.direction == 'W' and i.number == west:
                    west = i
                    print('west', west)
            conns = Connection.objects.all()
            for c in conns:
                if east == c.east and west == c.west and data_dict['request']['action'] == 'connect':
                    if c.status == 'pending':
                        Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(status=status)
                        ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
                        Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                        OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)
                    elif c.status == 'break':
                        Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
                        ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
                        Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                        OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)
                if east == c.east and west == c.west and data_dict['request']['action'] == 'disconnect':
                    if c.status == 'pending':
                        Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(status=status, disconnected_date=datetime.now())
                        ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
                        Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                        OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)
                    elif c.status == 'break':
                        Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status, disconnected_date=datetime.now())
                        ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
                        Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                        OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)

    if status == 'break':
        response = data_dict['response']
        east = data_dict['request']['east']
        west = data_dict['request']['west']
        sequence = data_dict['response']['sequence']
        action = data_dict['request']['action']
        print('Current sequence', data_dict['response']['sequence'])
        if response:
            ports = Port.objects.all()
            for i in ports:
                if i.direction == 'E' and i.number == east:
                    east = i
                    print('east', east)
                if i.direction == 'W' and i.number == west:
                    west = i
                    print('west', west)
            conns = Connection.objects.all()
            for c in conns:
                if east == c.east and west == c.west and c.status == 'break':
                    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
                    ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
                    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)
                elif east == c.east and west == c.west and c.status == 'pending':
                    Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(status=status)
                    ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
                    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
                    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)

    return status, sequence, action


# @login_required(login_url='/login/')
def checktask(request):

    status = ""
    operations = Operation.objects.filter(robotnumber='1')
    for i in operations:
        uuid = str(i.uuid)
        if 'historyid' in request.GET:
            status = checkstatus(request, uuid, request.GET['historyid'])
        else: 
            status = checkstatus(request, uuid)

    return JsonResponse({'status': status})


# @login_required(login_url='/login/')
def pendingtask(request):

    # not sure about this three variables
    uuid = ""
    historyid = ""
    resp = ""
    if 'id' in request.POST:
        historyid = request.POST['id']
        connh = ConnectionHistory.objects.all().filter(id=historyid)
        for i in connh:
            conn = Connection.objects.all().filter(east=i.east, west=i.west, disconnected_date=None)
            for c in conn:
                if i.switching_type == 'C' and c.disconnected_date is None:
                    payload = {'east': i.east.number, 'west': i.west.number, 'action': 'connect'}
                    resp = requests.post('http://192.168.60.73/app1/connect', data=payload)
                if i.switching_type == 'D' and c.disconnected_date is None:
                    payload = {'east': i.east.number, 'west': i.west.number, 'action': 'disconnect'}
                    resp = requests.post('http://192.168.60.73/app1/disconnect', data=payload)
            print('payload', payload)
            uuid = resp.text
            print('UUID:', uuid)

        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending', request=str(payload))
        else:
            Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
    OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

    return JsonResponse({'historyid': historyid})


# @login_required(login_url='/login/')
def canceltask(request):

    historyid = ""
    status = ""
    if 'id' in request.POST and 'action' in request.POST and request.POST['action'] == 'canceled':
        historyid = request.POST['id']
        status = request.POST['action']
        connh = ConnectionHistory.objects.all().filter(id=historyid)
        conn = Connection.objects.all()
        for i in connh:
            for c in conn:
                if i.switching_type == 'C' and c.disconnected_date is None:
                    Connection.objects.filter(east=i.east, west=i.west, status='pending').delete()
                elif i.switching_type == 'D' and c.disconnected_date is None:
                    Connection.objects.filter(east=i.east, west=i.west, status='pending').update(status='success', disconnected_date=None)
        ConnectionHistory.objects.filter(id=historyid).update(status=status)

    return JsonResponse({'historyid': historyid, 'action': status})

# @login_required(login_url='/login/')
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
        if 'action' in request.GET and request.GET['action'] == 'connected':
            conns = Connection.objects.all().filter(disconnected_date=None)
            obj = dict()
            for c in conns:
                obj[str(c.east)] = str(c.west), str(c.status)
            return Response(obj)

        conn = Connection.objects.all()
        serializer = ConnectionSerializer(conn, many=True)
        if 'checktask' in request.GET:
            checktask(request)

        return Response(serializer.data)

    def post(self, request):

    # Angular2 cannot access database if request superuser
    #if request.user.is_superuser or request.user.is_staff:
        print(request.data)
        # validate inputs
        if 'action' not in request.data:
            return Response('No action', content_type="text/plain")

        if 'east' not in request.data:
            return Response('No east', content_type="text/plain")

        if 'west' not in request.data:
            return Response('No west', content_type="text/plain")

        if 'number' in request.data and 'stops' in request.data:
            return self.debug(request)
        elif request.data['action'] == 'disconnect':
            return self.disconnect(request)
        else:
            return self.create_connection(request)
    
    def debug(self, request):

        east, west = self.get_available_ports(request)
        print('debug', east, west)
        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")
        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        print('connection_history', east, west)
        if 'number' in request.data and 'stops' in request.data:
            number = request.data['number']
            stops = request.data['stops']
            action = request.data['action']
        else:
            stops = None
            number = None
        if stops and number:
            payload = {'east': east.number, 'west': west.number, 'action': str(action), 'stops': str(stops), 'no':str(number)}
        else:
            return False
        resp = requests.post('http://192.168.60.73/app1/debug', data=payload)
        print('payload', 'E' + str(east.number), 'W' + str(west.number), 'action :' + str(action), 'stops :' + str(stops), 'no :', str(number))
        uuid = resp.text
        print('UUID:', uuid)

        operations = Operation.objects.filter(robotnumber='1')
        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending', request=str(payload))
        else:
            Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

        return Response(request.data)

    def create_connection(self, request):

        east, west = self.get_available_ports(request)

        print('connection', east, west)

        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")
        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create connection
        Connection.objects.create(east=east, west=west, status='pending')
        ConnectionHistory.objects.create(east=east, west=west, switching_type='C', status='pending')
        print('connection_history', east, west)
        if 'stops' in request.data:
            stops = request.data['stops']
        else:
            stops = None
        if stops:
            payload = {'east': east.number, 'west': west.number, 'action': "connect", 'stops': stops}
        else:
            payload = {'east': east.number, 'west': west.number, 'action': "connect"}
        resp = requests.post('http://192.168.60.73/app1/connect', data=payload)
        print('payload', 'E' + str(east.number), 'W' + str(west.number), 'action : connect')
        uuid = resp.text
        print('UUID :', uuid)

        operations = Operation.objects.filter(robotnumber='1')
        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending', request=str(payload))
        else:
            Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
        OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

        return Response(request.data)

    def disconnect(self, request):

    # Angular2 cannot access database if request superuser
    # if request.user.is_superuser or request.user.is_staff:
        east, west = self.get_available_ports(request)
        print('disconnection', east, west)
        if east is None:
            return Response('No east port number ' + str(east), content_type="text/plain")
        if west is None:
            return Response('No west port number ' + str(west), content_type="text/plain")

        # create disconnection
        conns = Connection.objects.all().filter(disconnected_date=None)
        for c in conns:
            print(c)
            if c.east == east and c.west == west:
                Connection.objects.filter(east=east, west=west, disconnected_date=None, status='success').update(status='pending')
                ConnectionHistory.objects.create(east=east, west=west, switching_type='D', status='pending')
                print('connection_history', east, west)
                if 'stops' in request.data:
                    stops = request.data['stops']
                else:
                    stops = None
                if stops:
                    payload = {'east': east.number, 'west': west.number, 'action': "disconnect", 'stops': stops}
                else:
                    payload = {'east': east.number, 'west': west.number, 'action': "disconnect"}
                resp = requests.post('http://192.168.60.73/app1/disconnect', data=payload)
                print('payload', 'E' + str(east.number), 'W' + str(west.number), 'action : disconnection')
                uuid = resp.text
                print('UUID:', uuid)

                operations = Operation.objects.filter(robotnumber='1')
                if len(operations) == 1:
                    operations.update(uuid=uuid, status='pending', request=str(payload))
                else:
                    Operation.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))
                OperationHistory.objects.create(robotnumber='1', uuid=uuid, status='pending', request=str(payload))

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

        connh = ConnectionHistory.objects.all()
        serializer = ConnectionHistorySerializer(connh, many=True)

        return Response(serializer.data)


class AlarmList(APIView):

    def get(self, request):

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

        alarm = Alarm.create(
            request.data["alarm"], request.data["detail"], request.data["severity"])
        alarm.save()

        return Response(request.data)


class OperationList(APIView):

    def get(self, request):

        operations = Operation.objects.all()
        serializer = OperationSerializer(operations, many=True)

        return Response(serializer.data)


class OperationHistoryList(APIView):

    def get(self, request):

        OperationHistorys = OperationHistory.objects.all()
        serializer = OperationHistorySerializer(OperationHistorys, many=True)

        return Response(serializer.data)
