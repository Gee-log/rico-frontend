"""webapp views
"""
import ast
import logging.handlers
import os
import requests

from datetime import datetime
from django.http import HttpResponse
from django.shortcuts import render
from django.utils import timezone
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import status as drf_status

from webapp.models import Connection, Port, Alarm, ConnectionHistory, Operation, OperationHistory
from webapp.white import Walker


# set walk 
walk = Walker()

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('webapp')

# create a file handler
handler = logging.handlers.RotatingFileHandler('webapp.log', maxBytes=10485760, backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


if 'CELERY_APP' in os.environ and os.environ['CELERY_APP']:
    CELERY_APP = os.environ['CELERY_APP']
    logger.info('CELERY_APP from os.environ: {}'.format(CELERY_APP))
else:
    CELERY_APP = "http://192.168.60.103:80/rico"     # embest
    logger.info('CELERY_APP: {}'.format(CELERY_APP))


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


def checkstatus(uuid):
    """Check current status from celery and check condition for calling sub function

    Args:
        uuid (uuid4): uuid from celery

    Returns:
        json:
            status (string): status code
            sequence (string): current sequence
            action (action): action type
    """

    # Validate using dummy
    if walk.is_dummy():
        data_dict = walk.checkstatus(uuid)

        if data_dict['status'] != 'success':
            logger.info('Walker Status: %s , %s', uuid, data_dict)

    else:
        resp = requests.get(CELERY_APP + '/result?id=' + uuid)
        data_dict = resp.json()
        # data = str(resp.json())
        # data_dict = ast.literal_eval(data)

    status = data_dict['status']

    if status == 'success':
        return_data = checksuccess(data_dict, uuid)

    elif status == 'break':
        return_data = checkbreak(data_dict, uuid)
        logger.info('checktask end: %s', return_data)

    elif status == 'started':
        return_data = checkstarted(data_dict, uuid)

    elif status == 'revoked':
        return_data = checkrevoked(data_dict, uuid)
        logger.info('checktask end: %s', return_data)

    elif status == 'failure':
        return_data = checkfailure(data_dict, uuid)
        logger.info('checktask end: %s', return_data)

    elif status == 'error':
        return_data = checkerror(data_dict, uuid)
        logger.info('checktask end: %s', return_data)

    elif status == 'alarm':
        return_data = checkalarm(data_dict, uuid)
        logger.info('checktask end: %s', return_data)

    else:
        return_data = Response({'status': str(status), 'sequence': None, 'action': None}, status=drf_status.HTTP_200_OK)
        logger.info('checktask end: %s', return_data)

    return return_data


def matching_port_object_in_database(east, west):
    
    ports = Port.objects.all()
    for i in ports:

        if i.direction == 'E' and i.number == east:
            east = i

        if i.direction == 'W' and i.number == west:
            west = i
    
    return east, west


def checksuccess(data_dict, uuid):
    """If current status is success then calling checksuccess_checkcondition() to check condition

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): 'success'
            sequence (string): current sequence
            action (action): action type
    """

    action = data_dict['request']['action']
    east = data_dict['request']['east']
    west = data_dict['request']['west']
    response = data_dict['response']
    request_data = data_dict['request']
    sequence = None
    status = data_dict['status']

    east, west = matching_port_object_in_database(east, west)

    if response is None and 'reload' in data_dict:
        checksuccess_reload(action, east, west, uuid, request_data, data_dict)

    else:
        checksuccess_checkcondition(action, east, west, status, uuid)

    return Response({'status': status, 'sequence': sequence, 'action': action}, status=drf_status.HTTP_200_OK)


def checksuccess_checkcondition(action, east, west, status, uuid):
    """Check condition for calling sub functions to update database

    Args:
        action (string): robot's action from checksuccess()
        east (integer): east port's number from checksuccess()
        west (integer): west port's number from checksuccess()
        status (string): robot's status from checksuccess()
        uuid (uuid4): uuid from checksuccess()
    """

    conns = Connection.objects.all()
    for c in conns:

        if east == c.east and west == c.west and action == 'connect':

            if c.status == 'pending':
                logger.error('checksuccess_checkcondition method: error savedata_pendingtosuccess_connect was removed')
                # savedata_pendingtosuccess_connect(east, west, status, uuid)

            elif c.status == 'break':
                savedata_breaktosuccess_connect(east, west, status, uuid)

            elif c.status == 'started':
                savedata_startedtosuccess_connect(east, west, status, uuid)

        elif east == c.east and west == c.west and action == 'disconnect':

            if c.status == 'pending':
                logger.error('checksuccess_checkcondition method: error savedata_pendingtosuccess_disconnect was removed')                
                # savedata_pendingtosuccess_disconnect(east, west, status, uuid)

            elif c.status == 'break':
                savedata_breaktosuccess_disconnect(east, west, status, uuid)

            elif c.status == 'started':
                savedata_startedtosuccess_disconnect(east, west, status, uuid)


def checksuccess_reload(action, east, west, uuid, request_data, data_dict):
    """Check success reload mode for update database

      Args:
          action (string): robot's action from checksuccess()
          east (integer): east port's number from checksuccess()
          west (integer): west port's number from checksuccess()
          uuid (uuid4): uuid from checksuccess()
          request_data (string): request data from checksuccess()
          data_dict (request): response data from checksuccess()

    """

    status = data_dict['status']

    if action == 'connect':
        connections = Connection.objects.filter(east=east, west=west, disconnected_date=None)
        connections.delete()

        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, status='started', switching_type='C').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', status='started', timestamp=o.timestamp).update(status='reload', timestamp=datetime.now())

    else:
        Connection.objects.filter(east=east, west=west, disconnected_date=None).update(status='success', disconnected_date=None)

        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, status='started', switching_type='D').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', status='started', timestamp=o.timestamp).update(status='reload', timestamp=datetime.now())

    Operation.objects.filter(uuid=uuid).update(status=status, request=request_data, response=data_dict)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(request=request_data, status='reload', response=data_dict, finished_time=datetime.now())


def checkbreak(data_dict, uuid):
    """If current status is break then checking conditions for calling sub functions to update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): 'break'
            sequence (string): current sequence
            action (action): action type
    """

    action = data_dict['request']['action']    
    east = data_dict['request']['east']
    west = data_dict['request']['west']
    response = data_dict['response']    
    sequence = data_dict['response']['sequence']
    status = data_dict['status']
    logger.info('Current sequence: %s', data_dict['response']['sequence'])

    if response:
        east, west = matching_port_object_in_database(east, west)

        conns = Connection.objects.filter(disconnected_date=None)
        for c in conns:

            if east == c.east and west == c.west and c.status == 'break':
                savedata_breaktobreak(east, west, status, response, uuid)
            elif east == c.east and west == c.west and c.status == 'pending':
                logger.error('checkbreak method: error savedata_breaktopending function was removed')
                # savedata_breaktopending(east, west, status, response, uuid)
            elif east == c.east and west == c.west and c.status == 'started':
                savedata_breaktostarted(east, west, status, response, uuid)

    return Response({'status': status, 'sequence': sequence, 'action': action}, status=drf_status.HTTP_200_OK)


def checkstarted(data_dict, uuid):
    """If current status is started then checking conditions for calling sub functions to update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): 'started'
            sequence (string): current sequence
            action (action): action type
    """

    operations = Operation.objects.all()
    for i in operations:
        dict_operations = ast.literal_eval(i.request)
        east = dict_operations['east']
        west = dict_operations['west']

    status = data_dict['status']

    conns = Connection.objects.filter(disconnected_date=None)
    for c in conns:

        if c.status == 'break':
            savedata_startedtobreak(east, west, status, uuid)

        elif c.status == 'pending':
            savedata_startedtopending(east, west, status, uuid)

    return Response({'status': status, 'sequence': None, 'action': None}, status=drf_status.HTTP_200_OK)


def checkrevoked(data_dict, uuid):
    """If current status is revoked then update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): status code
            sequence (string): None
            action (string): None
        Json: ({'status': status, 'sequence': None, 'action': None})
    """

    action = ''
    east = ''
    west = ''
    status = data_dict['status']

    operations = Operation.objects.all()
    for i in operations:

        obj = ast.literal_eval(i.request)
        east = obj['east']
        west = obj['west']
        action = obj['action']

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connections = Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started')
        connections.delete()

        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', timestamp=o.timestamp).update(status=status)

    else:
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started').update(status='success', disconnected_date=None)

        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', timestamp=o.timestamp).update(status=status)

    Operation.objects.filter(uuid=uuid).update(status=status)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status)

    return Response({'status': status, 'sequence': None, 'action': action}, status=drf_status.HTTP_200_OK)


def checkfailure(data_dict, uuid):
    """If current status is revoked then update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): status code
            sequence (string): None
            action (string): None
        Json: ({'status': status, 'sequence': None, 'action': None})
    """

    action = ''
    default_action = 'connect'
    east = ''
    west = ''
    status = data_dict['status']

    operations = Operation.objects.all()
    for i in operations:

        obj = ast.literal_eval(i.request)
        east = obj['east']
        west = obj['west']

        if data_dict['action']:
            action = data_dict['action']
        else:
            action = default_action

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connections = Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started')
        connections.delete()
        
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', timestamp=o.timestamp).update(status=status)

    else:
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status='started').update(
            status='success', disconnected_date=None)

        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D').order_by('-timestamp')[:1]
        for o in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', timestamp=o.timestamp).update(status=status)

    Operation.objects.filter(uuid=uuid).update(status=status, response=data_dict)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=data_dict)

    return Response({'status': status, 'sequence': None, 'action': action}, status=drf_status.HTTP_200_OK)


def checkerror(data_dict, uuid):
    """If current status is error then update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): status code
            sequence (string): None
            action (string): None
    """

    code = None
    error = data_dict['error']
    sequence = None   
    status = data_dict['status']
    # request data
    action = data_dict['request']['action']
    east = data_dict['request']['east']
    west = data_dict['request']['west']
    
    if data_dict['request']['options']['current_sequence']:
        sequence = data_dict['request']['options']['current_sequence']
    
    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status=['started', 'pending']).delete()
        
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', status=['pending', 'started']).order_by('-timestamp')[:1]
        for c in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', timestamp=c.timestamp).update(status=status)

    else:
        Connection.objects.filter(east=east, west=west, disconnected_date=None, status=['started', 'pending']).update(status='success', disconnected_date=None)
        
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', status=['pending', 'started']).order_by('-timestamp')[:1]
        for c in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', timestamp=c.timestamp).update(status=status)

    Operation.objects.filter(uuid=uuid).update(status=status, response=error)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=error)

    return Response({'status': status, 'sequence': sequence, 'action': action, 'error': error, 'code': code}, status=drf_status.HTTP_200_OK)


def checkalarm(data_dict, uuid):
    """If current status is alarm then update database

    Args:
        data_dict (dictionary): dictionary's data from checkstatus()
        uuid (uuid4): uuid from checkstatus()

    Returns:
        json:
            status (string): status code
            sequence (string): None
            action (string): None
    """

    sequence = None    
    status = data_dict['status']
    # request data
    request_obj = data_dict['request']
    action = data_dict['request']['action']
    east = data_dict['request']['east']
    west = data_dict['request']['west']
    # response data
    response_error = data_dict['response']
    code = data_dict['response']['code']
    error = data_dict['response']['message']

    try:
        error_sequence = data_dict['response']['sequence']
    except ValueError:
        error_sequence = data_dict['request']['options']['current_sequence']

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C').order_by('-timestamp')[:1]
        for c in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', timestamp=c.timestamp).update(status=status)

    else:
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D').order_by('-timestamp')[:1]
        for c in connectionhistorys:
            ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', timestamp=c.timestamp).update(status=status)

    Operation.objects.filter(uuid=uuid).update(status=status, request=request_obj, response=response_error)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response_error)

    return Response({'status': status, 'sequence': sequence, 'action': action,
                     'error': str(error) + ' ' + 'S' + str(error_sequence),
                     'code': code}, status=drf_status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def checktask(request):
    """Calling by frontend side then call checkstatus() to check conditions and update database
    and response data to frontend side

    Args:
        request: request data

    Returns:
            json:
                status (string): status code
                sequence (string): current sequence
                action (action): action type
    """

    return_data = Response({'status': 'canceled'}, status=drf_status.HTTP_200_OK)

    operations = Operation.objects.all()
    for i in operations:
        uuid = str(i.uuid)
        return_data = checkstatus(uuid)

    return return_data


def savedata_breaktosuccess_connect(east, west, status, uuid):
    """Update database's status break to success, action connect

    Args:
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    switching_type = 'C'
    response = None

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

    east, west = matching_port_object_in_database(east, west)
    
    connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type=switching_type, status='break').order_by('-timestamp')[:1]
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status='break', timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('break -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtosuccess_connect(east, west, status, uuid):
    """Update database's status started to success, action connect

    Args:
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    switching_type = 'C'
    response = None

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)
        east = data_dict['east']
        west = data_dict['west']

    east, west = matching_port_object_in_database(east, west)

    connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type=switching_type, status='started').order_by('-timestamp')[:1]
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status='started', timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('started -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktosuccess_disconnect(east, west, status, uuid):
    """Update database's status break to success, action disconnect

    Args:
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    response = None
    switching_type = 'D'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

    east, west = matching_port_object_in_database(east, west)

    connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type=switching_type, status='break').order_by('-timestamp')[:1]
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status='break', timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('disconnect break -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status, disconnected_date=datetime.now())
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtosuccess_disconnect(east, west, status, uuid):
    """Update database's status started to success, action disconnect

    Args:
        east (integer): east port's number from checksuccess_checkcondition()
        west (integer): west port's number from checksuccess_checkcondition()
        status (string): robot's status from checksuccess_checkcondition()
        uuid (uuid4): uuid from checksuccess_checkcondition()
    """

    response = None
    switching_type = 'D'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

    east, west = matching_port_object_in_database(east, west)

    connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type=switching_type, status='started').order_by('-timestamp')[:1]
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status='started', timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('disconnect started -> success: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(status=status, disconnected_date=datetime.now())
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktobreak(east, west, status, response, uuid):
    """Update database's status break to break

    Args:
        east (integer): east port's number from checkbreak()
        west (integer): west port's number from checkbreak()
        status (string): robot's status from checkbreak()
        response (string): robot's response from checkbreak()
        uuid (uuid4): uuid from checkbreak()
    """

    action = ''
    default_connect = 'connect'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)
        east = data_dict['east']
        west = data_dict['west']

        if data_dict['action']:
            action = data_dict['action']
        else:
            action = default_connect

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', status='break').order_by('-timestamp')[:1]
    
    else:
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', status='break').order_by('-timestamp')[:1]        
    
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status='break', timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('break -> break: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='break', disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_breaktostarted(east, west, status, response, uuid):
    """Update database's status break to started

    Args:
        east (integer): east port's number from checkbreak()
        west (integer): west port's number from checkbreak()
        status (string): robot's status from checkbreak()
        response (string): robot's response from checkbreak()
        uuid (uuid4): uuid from checkbreak()
    """

    action = ''
    default_action = 'connect'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

        if data_dict['action']:
            action = data_dict['action']
        else:
            action = default_action

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C', status='started').order_by('-timestamp')[:1]
    
    else:
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D', status='started').order_by('-timestamp')[:1]        

    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, status=c.status, timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('break -> started: %s %s', east, west)
    Connection.objects.filter(east=east, west=west, status='started', disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status, response=response)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(finished_time=datetime.now(), status=status, response=response)


def savedata_startedtobreak(east, west, status, uuid):
    """Update database's status break to started

    Args:
        east (integer): east port's number from checkstarted()
        west (integer): west port's number from checkstarted()
        status (string): robot's status from checkstarted()
        uuid (uuid4): uuid from checkstarted()
    """

    action = ''
    default_action = 'connect'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

        if data_dict['action']:
            action = data_dict['action']
        else:
            action = default_action

    east, west = matching_port_object_in_database(east, west)

    if action == 'connect':
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, status='break', switching_type='C').order_by('-timestamp')[:1]
    
    else:
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, status='break', switching_type='D').order_by('-timestamp')[:1]

    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('started -> break')
    Connection.objects.filter(east=east, west=west, disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(status=status)


def savedata_startedtopending(east, west, status, uuid):
    """Update database's status started to pending

    Args:
        east (integer): east port's number from checkstarted()
        west (integer): west port's number from checkstarted()
        status (string): robot's status from checkstarted()
        uuid (uuid4): uuid from checkstarted()
    """

    action = ''
    default_action = 'connect'

    operations = Operation.objects.filter(uuid=uuid)
    for i in operations:
        data_dict = ast.literal_eval(i.request)        
        east = data_dict['east']
        west = data_dict['west']

        if data_dict['action']:
            action = data_dict['action']
        else:
            action = default_action

    east, west = matching_port_object_in_database(east, west)
    
    if action == 'connect':
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='C').order_by('-timestamp')[:1]
    
    else:
        connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west, switching_type='D').order_by('-timestamp')[:1]    
    
    for c in connectionhistorys:
        ConnectionHistory.objects.filter(east=c.east, west=c.west, switching_type=c.switching_type, timestamp=c.timestamp).update(status=status, timestamp=datetime.now())

    logger.info('started -> pending')
    Connection.objects.filter(east=east, west=west, disconnected_date=None).update(status=status)
    Operation.objects.filter(uuid=uuid).update(status=status)
    OperationHistory.objects.filter(uuid=uuid, finished_time=None).update(status=status)


def save(question_id, timestamp=0):
    """Continue task's status pending

    Args:
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

    # connection_log
    if qus == '1':
        download_name = 'connection_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        writer.writerow(['Time', 'Type', 'East Port', 'West Port'])

        connection = ConnectionHistory.objects.all()
        for con in connection:

            if con.switching_type == 'C':
                writer.writerow([timezone.localtime(con.timestamp), 'connected', con.east, con.west])

            else:
                writer.writerow([timezone.localtime(con.timestamp), 'disconnected', con.east, con.west])

    # current_alarm_log
    elif qus == '2':
        download_name = 'current_alarm_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        s = datetime.fromtimestamp(float(timestamp) / 1000)
        now = datetime.now()
        writer.writerow(['Alarm', 'Detail', 'Time'])

        alarms = Alarm.objects.filter(timestamp__range=(s, now))
        for i in alarms:
            writer.writerow([i.alarm, i.detail, timezone.localtime(i.timestamp)])

    # alarmHistory_log
    elif qus == '3':
        download_name = 'alarmHistory_log.csv'
        response['Content-Disposition'] = "attachment; filename=%s" % download_name
        writer = csv.writer(response)
        writer.writerow(['Alarm', 'Detail', 'Time'])

        alarms = Alarm.objects.all()
        for i in alarms:
            writer.writerow([i.alarm, i.detail, timezone.localtime(i.timestamp)])

    else:
        logger.info('Error !')
        return None

    return response


@api_view(['GET'])
def homes(request):
    """Ask robot to home all axes

    Returns:
            json:
                status (string): status code
                sequence (string): current sequence
                action (action): action type
    """

    # Validate using dummy
    if walk.is_dummy():
        resp = walk.homes()
    else:
        resp = requests.get(CELERY_APP + '/homes')

    return_data = {'uuid': resp.text}
    return Response(return_data, status=drf_status.HTTP_200_OK)


@api_view(['POST'])
def rollback(request):
    """Rollback smu position

    Returns:
            status (string): status code
            detail (string): error detail
            uuid (uuid4): uuid from celery 
    """

    request_data = JSONParser().parse(request)
    if 'smu_no' in request_data:
        east = request_data['smu_no']
        west = request_data['smu_no']
        payload = {'east': east, 'west': west}
        resp = requests.post(CELERY_APP + '/rollback', data=payload)
        return_data = {'uuid': resp.text}
        return Response(return_data, status=drf_status.HTTP_200_OK)
    else:
        return_data = {'status': 'error', 'detail': 'Invalid input.'}
        return Response(return_data, status=drf_status.HTTP_400_BAD_REQUEST)
