from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from webapp.models import Connection, Port, Alarm, ConnectionHistory, Operation, OperationHistory
from webapp.serializers import OperationSerializer, OperationHistorySerializer
from datetime import datetime
from django.utils import timezone
# from django.contrib.auth import authenticate, get_user_model, login, logout
# from personal.forms import UserLoginForm
# from django.contrib.auth.decorators import login_required
# from django.views.decorators.csrf import csrf_protect, csrf_exempt
# from django.utils.decorators import method_decorator
import ast
import requests
from webapp.white import Walker
import logging


CELERY_APP = "http://localhost:8000/rico"   # localhost
# CELERY_APP = "http://192.168.60.76:80/rico"   # embest


walk = Walker()

# Log process

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('webapp')

# create a file handler
handler = logging.FileHandler('webapp.log')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)

# utilities

# @login_required(login_url='/login/') If want validations user


def index(request):
    """Index page of frontend

    Returns:
        render: index.html
    """
    return render(request, template_name='webapp/index.html')


def landing(request):
    """Landing page to reroute to another path

    Returns:
        render: landing.html
    """
    return render(request, template_name='webapp/landing.html')


def checkstatus(request, uuid): 
    """Check current status from celery and check condition for calling sub function

    Args:
        request: request data
        uuid (uuid4): uuid from celery

    Returns:
        Json: data
        ({'status': 'started, break, success, revoked', 'sequence': '1,2, ...', 'action': 'connect or disconnect'})
    """

    if walk.is_dummy():
        data_dict = walk.checkstatus(uuid)
        if data_dict['status'] != 'success':
            logger.info('Walker Status: %s , %s', uuid, data_dict)
    else:
        resp = requests.get(CELERY_APP + '/result?id=' + uuid)
        # print("checktask", resp.text)
        logger.info('checktask: %s : %s', uuid, resp)
        data = str(resp.json())
        logger.info('checktask data: %s', data)
        data_dict = ast.literal_eval(data)
    status = data_dict['status']
    if status == 'success':
        data = checksuccess(request, data_dict, uuid)
        logger.info('checktask end: %s', data)
    elif status == 'break':
        data = checkbreak(request, data_dict, uuid)
        logger.info('checktask end: %s', data)
    elif status == 'started':
        data = checkstarted(request, data_dict, uuid)
        logger.info('checktask end: %s', data)
    elif status == 'revoked':
        data = checkrevoked(request, data_dict, uuid)
        logger.info('checktask end: %s', data)
    else:
        return JsonResponse({'status': str(status), 'sequence': None, 'action': None})

    return data


def checksuccess(request, data_dict, uuid):
    """If current status is success and calling checksuccess_checkcondition() to check condition

    Args:
        request: request data
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        Json: data
        ({'status': 'success', 'sequence': '1,2, ...', 'action': 'connect or disconnect'})
    """

    status = data_dict['status']
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
            if i.direction == 'W' and i.number == west:
                west = i
        checksuccess_checkcondition(request, action, east, west, status, response, uuid)

    return JsonResponse({'status': status, 'sequence': sequence, 'action': action})


def checksuccess_checkcondition(request, action, east, west, status, response, uuid):
    """Check condition for calling sub functions to update database

    Args:
        request: request data
        action (string): robot's action from checksuccess()
        east (integer): east port's number from checksuccess()
        west (integer): west port's number from checksuccess()
        status (string): robot's status from checksuccess()
        response (string): robot's response from checksuccess()
        uuid (uuid4): uuid from checksuccess()
    """

    conns = Connection.objects.all()
    for c in conns:
        if east == c.east and west == c.west and action == 'connect':
            if c.status == 'pending':
                savedata_pendingtosuccess_connect(request, east, west, status, response, uuid)
            elif c.status == 'break':
                savedata_breaktosuccess_connect(request, east, west, status, response, uuid)
            elif c.status == 'started':
                savedata_startedtosuccess_connect(request, east, west, status, response, uuid)

        elif east == c.east and west == c.west and action == 'disconnect':
            if c.status == 'pending':
                savedata_pendingtosuccess_disconnect(request, east, west, status, response, uuid)
            elif c.status == 'break':
                savedata_breaktosuccess_disconnect(request, east, west, status, response, uuid)
            elif c.status == 'started':
                savedata_startedtosuccess_disconnect(request, east, west, status, response, uuid)


def checkbreak(request, data_dict, uuid):
    """If current status is break then checking conditions for calling sub functions to update database

    Args:
        request: request data
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        Json: data
        ({'status':  'break', 'sequence': '1,2, ...', 'action': 'connect or disconnect'})
    """

    response = data_dict['response']
    east = data_dict['request']['east']
    west = data_dict['request']['west']
    sequence = data_dict['response']['sequence']
    action = data_dict['request']['action']
    status = data_dict['status']
    logger.info('Current sequence: %s', data_dict['response']['sequence'])

    if response:
        ports = Port.objects.all()
        for i in ports:
            if i.direction == 'E' and i.number == east:
                east = i
            if i.direction == 'W' and i.number == west:
                west = i
        conns = Connection.objects.all()
        for c in conns:
            if east == c.east and west == c.west and c.status == 'break':
                savedata_breaktobreak(request, east, west, status, response, uuid)
            elif east == c.east and west == c.west and c.status == 'pending':
                savedata_breaktopending(request, east, west, status, response, uuid)
            elif east == c.east and west == c.west and c.status == 'started':
                savedata_breaktostarted(request, east, west, status, response, uuid)

    return JsonResponse({'status': status, 'sequence': sequence, 'action': action})


def checkstarted(request, data_dict, uuid):
    """If current status is started then checking conditions for calling sub functions to update database

    Args:
        request: request data
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        Json: data
        ({'status':  'started', 'sequence': None, 'action': None})
    """

    status = data_dict['status']

    conns = Connection.objects.all()
    for c in conns:
        if c.status == 'break':
            savedata_startedtobreak(request, status, uuid)
        elif c.status == 'pending':
            savedata_startedtopending(request, status, uuid)
        elif c.status == 'started':
            savedata_startedtostarted(request, status, uuid)

    return JsonResponse({'status': status, 'sequence': None, 'action': None})


def checkrevoked(request, data_dict, uuid):
    """If current status is revoked then update database

    Args:
        request: request data
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        Json: ({'status': status, 'sequence': None, 'action': None})
    """

    status = data_dict['status']
    operations = Operation.objects.filter(robotnumber='1', uuid=uuid)

    Operation.objects.filter(robotnumber='1', uuid=uuid).update(status=status)

    for i in operations:
        obj = ast.literal_eval(i.request)
        east = obj['east']
        west = obj['west']
    if obj['action'] == 'connect':
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started').delete()
    else:
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started').update(
            status='success', disconnected_date=None)

    return JsonResponse({'status': status, 'sequence': None, 'action': None})


def checktask(request):
    """Calling by frontend side then call checkstatus() to check conditions and update database
    and response data to frontend side

    Args:
        request: request data

    Returns:
        Json: data
        ({'status': 'started, break, success, revoked', 'sequence': '1,2, ...', 'action': 'connect or disconnect'})
    """

    status = JsonResponse({'status': 'canceled'})

    operations = Operation.objects.filter(robotnumber='1')
    for i in operations:
        uuid = str(i.uuid)
        status = checkstatus(request, uuid)

    return status


def savedata_pendingtosuccess_connect(request, east, west, status, response, uuid):
    """Update database's status pending to success, action connect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('pending -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktosuccess_connect(request, east, west, status, response, uuid):
    """Update database's status break to success, action connect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('break -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtosuccess_connect(request, east, west, status, response, uuid):
    """Update database's status started to success, action connect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('started -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='started').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_pendingtosuccess_disconnect(request, east, west, status, response, uuid):
    """Update database's status pending to success, action disconnect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('disconnect pending -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(
        status=status, disconnected_date=datetime.now())
    ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktosuccess_disconnect(request, east, west, status, response, uuid):
    """Update database's status break to success, action disconnect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('disconnect break -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(
        status=status, disconnected_date=datetime.now())
    ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtosuccess_disconnect(request, east, west, status, response, uuid):
    """Update database's status started to success, action disconnect

    Args:
        request: request data
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        response (string): robot's response from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    logger.info('disconnect started -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(
        status=status, disconnected_date=datetime.now())
    ConnectionHistory.objects.filter(east=east, west=west, status='started').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktobreak(request, east, west, status, response, uuid):
    """Update database's status break to break

    Args:
        request: request data
        east (integer): east port's number from checkbreak()
        west (integer): west port's number from checkbreak()
        status (string): robot's status from checkbreak()
        response (string): robot's response from checkbreak()
        uuid (uuid4): uuid from checkbreak()
    """

    logger.info('break -> break: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='break').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktopending(request, east, west, status, response, uuid):
    """Update database's status break to break

    Args:
        request: request data
        east (integer): east port's number from checkbreak()
        west (integer): west port's number from checkbreak()
        status (string): robot's status from checkbreak()
        response (string): robot's response from checkbreak()
        uuid (uuid4): uuid from checkbreak()
    """

    logger.info('break -> pending: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='pending', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='pending').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status,
                                                     response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status,
                                                      response=response)


def savedata_breaktostarted(request, east, west, status, response, uuid):
    """Update database's status break to started

    Args:
        request: request data
        east (integer): east port's number from checkbreak()
        west (integer): west port's number from checkbreak()
        status (string): robot's status from checkbreak()
        response (string): robot's response from checkbreak()
        uuid (uuid4): uuid from checkbreak()
    """

    logger.info('break -> started: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(east=east, west=west, status='started').update(status=status)
    Operation.objects.filter(robotnumber='1').update(robotnumber='1', uuid=uuid, status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtobreak(request, status, uuid):
    """Update database's status break to started

    Args:
        request: request data
        status (string): robot's status from checkstarted()
        uuid (uuid4): uuid from checkstarted()
    """

    logger.info('started -> break')
    Connection.objects.filter(status='break', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(status='break').update(status=status)
    Operation.objects.filter(robotnumber='1').update(status=status)
    OperationHistory.objects.filter(uuid=uuid).update(status=status)


def savedata_startedtopending(request, status, uuid):
    """Update database's status started to pending

    Args:
        request: request data
        status (string): robot's status from checkstarted()
        uuid (uuid4): uuid from checkstarted()
    """

    logger.info('started -> pending')
    Connection.objects.filter(status='pending', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(status='pending').update(status=status)
    Operation.objects.filter(robotnumber='1').update(status=status)
    OperationHistory.objects.filter(uuid=uuid).update(status=status)


def savedata_startedtostarted(request, status, uuid):
    """Update database's status started to started

    Args:
        request: request data
        status (string): robot's status from checkstarted()
        uuid (uuid4): uuid from checkstarted()
    """

    logger.info('started -> started')
    Connection.objects.filter(status='started', disconnected_date=None).update(status=status)
    ConnectionHistory.objects.filter(status='started').update(status=status)
    Operation.objects.filter(robotnumber='1').update(status=status)
    OperationHistory.objects.filter(uuid=uuid).update(status=status)


# TODO
def pendingtask(request):
    """Continue task's status pending

    Args:
        request: request data

    Returns:
        Json: ({'historyid': historyid})
    """

    # not sure about this three variables
    uuid = ""
    historyid = ""
    resp = ""
    payload = []
    if 'id' in request.POST:
        historyid = request.POST['id']
        connh = ConnectionHistory.objects.all().filter(id=historyid)
        for i in connh:
            conn = Connection.objects.all().filter(
                east=i.east, west=i.west, disconnected_date=None)
            for c in conn:
                if i.switching_type == 'C' and c.disconnected_date is None:
                    payload = {'east': i.east.number,
                               'west': i.west.number, 'action': 'connect'}
                    if walk.is_dummy():
                        resp = walk.connect(payload)
                    else:
                        resp = requests.post(
                            CELERY_APP + '/connect', data=payload)
                if i.switching_type == 'D' and c.disconnected_date is None:
                    payload = {'east': i.east.number,
                               'west': i.west.number, 'action': 'disconnect'}
                    if walk.is_dummy():
                        resp = walk.disconnect(payload)
                    else:
                        resp = requests.post(
                            CELERY_APP + '/disconnect', data=payload)
            uuid = resp.text
            # print('payload', payload)
            # print('UUID:', uuid)

        operations = Operation.objects.filter(robotnumber='1')

        if len(operations) == 1:
            operations.update(uuid=uuid, status='pending',
                              request=str(payload))
        else:
            Operation.objects.create(
                robotnumber='1', uuid=uuid, status='pending', request=str(payload))
    OperationHistory.objects.create(
        robotnumber='1', uuid=uuid, status='pending', request=str(payload))

    return JsonResponse({'historyid': historyid})


def save(request, question_id, timestamp=0):
    """Continue task's status pending

    Args:
        request: request data
        question_id(string): value set and send from http in urls.py
        timestamp(integer): for use to calculate in current alarm log

    Returns:
        csv: csv files
    """

    # for Python 3.x use below !
    from io import StringIO
    # for Python 2.7 or earlier use below !
    # import StringIO
    import csv

    qus = question_id

    logger.info('question_id', question_id, 'timestamp', timestamp)

    # write file
    # for WINDOW OS use below !
    data = StringIO()

    # for Linux OS use below !
    # data = StringIO.StringIO()

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
    else:
        logger.info('Error !')
        return False

    return response


class OperationList(APIView):

    def get(self, request):
        """GET OperationList API

        Args:
            request: request data

        Returns:
            Json: Operation data
        """

        operations = Operation.objects.all()
        serializer = OperationSerializer(operations, many=True)

        return Response(serializer.data)


class OperationHistoryList(APIView):

    def get(self, request):
        """GET OperationHistoryList API

        Args:
            request: request data

        Returns:
            Json: OperationHistory data
        """

        operationhistorys = OperationHistory.objects.all()
        serializer = OperationHistorySerializer(operationhistorys, many=True)

        return Response(serializer.data)
