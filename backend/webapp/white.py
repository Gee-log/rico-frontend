import os
import uuid
import ast
import json
import datetime

from rest_framework.response import Response
from webapp.models import OperationHistory

CONNECT_STEPS = 17
DISCONNECT_STEPS = 21


class Walker(object):
    """To run walker, sh`export WINTER=1`
    """

    dummy = False
    tasks = {}

    def __init__(self):
        if 'WINTER' in os.environ:
            var = os.environ['WINTER']
            if var.isdigit():
                if int(var) > 0:
                    self.dummy = True
            elif var != 'false' and var != 'False':
                self.dummy = True

        #self.dummy = True

        self._log('dummy', self.dummy)

    def is_dummy(self):
        return self.dummy

    def checkstatus(self, uuid):
        """
        sample: {'status': 'success', 'request': {'action': 'connect', 'west': 1, 'east': 1, 'options': {'run': True}}, 'response': None}

        """

        status = 'started'
        request = None
        response = None

        now = datetime.datetime.utcnow()
        objs = OperationHistory.objects.filter(uuid=uuid)
        for o in objs:
            created_time = o.created_time.replace(tzinfo=None)
            seconds = (now - created_time).total_seconds()
            # {'action': 'connect', 'west': 2L, 'east': 2L, 'stops': '10', 'no': '9'}
            # {'action': 'disconnect', 'west': 2L, 'east': 2L, 'stops': '8,16', 'no': '7'} 
            request = ast.literal_eval(o.request)
            if 'stops' in request:
                return self._get_break(request, seconds)
            print('Now', now)
            print('CreateTime', created_time)
            print('SecondTime', seconds)
            if request['action'] == 'disconnect':
                time_limit = DISCONNECT_STEPS / 2
            else:
                time_limit = CONNECT_STEPS / 2

            if seconds > time_limit:
                status = 'success'

        out = {'status': status, 'request': request, 'response': response, 'Walker': True}
        self._log('checkstatus', out)

        return out

    def _get_break(self, request, seconds):
        arr = request['stops'].split(',')
        stops = sorted([int(a) for a in arr])
        if 1 in stops:
            stops = stops[1:]

        status = 'started'

        # request {'action': 'disconnect', 'west': 2L, 'east': 2L, 'stops': '8,16', 'no': '7'} 
        # response {'breakpoints': [8, 16], 'sequence': 15}}

        response = {'breakpoints': stops, 'sequence': -1}
        diff_time = 8

        if 'no' not in request:
            no = stops[0] - 1
            status = 'break'
        else:
            no = int(request['no'])
            step = no + 1
            if step >= stops[-1]:
                diff_time = DISCONNECT_STEPS - step
                response = None
                status = 'success'
            else:
                previous_s = 0
                for s in stops:
                    if s > step:
                        no = s - 1
                        diff_time = no - previous_s
                        break
                    previous_s = s
                status = 'break'

        self._log(seconds, diff_time)
        if seconds < diff_time:
            status = 'started'
            response = None
        elif response is not None:
            response['sequence'] = no

        out = {'status': status, 'request': request, 'response': response, 'Walker': True}
        self._log('_get_break', out)

        return out

    def connect(self, payload):
        self._log('connect', payload)

        resp = Response()
        resp.text = str(uuid.uuid4())
        return resp

    def disconnect(self, payload):
        self._log('disconnect', payload)

        resp = Response()
        resp.text = str(uuid.uuid4())
        return resp

    def debug(self, payload):
        self._log('debug', payload)

        resp = Response()
        resp.text = str(uuid.uuid4())
        return resp

    def homes(self):
        self._log('homes')

        resp = Response()
        resp.text = str(uuid.uuid4())
        return resp

    def _log(self, p1, p2=None):

        if p2 is not None:
            print('Walker', str(p1), str(p2))
        else:
            print('Walker', str(p1))

