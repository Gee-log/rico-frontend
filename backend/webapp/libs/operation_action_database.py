import ast

from datetime import datetime
from django.http import JsonResponse

from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory, Port
from webapp.libs import get_available_port

# set get_available_ports
get_available_ports = get_available_port.GetAvailablePort


class OperationAction(object):

    @staticmethod
    def query_to_get_port_object(east, west):

        ports = Port.objects.all()
        for p in ports:

            if p.direction == 'E' and p.number == east:
                east = p

            if p.direction == 'W' and p.number == west:
                west = p

        return east, west

    @staticmethod
    def clear_latest_operation():

        action = ''
        east = ''
        west = ''
        uuid = ''

        operations = Operation.objects.all()
        for o in operations:
            request_obj = ast.literal_eval(o.request)
            action = request_obj['action']
            east = request_obj['east']
            west = request_obj['west']
            uuid = o.uuid

        east, west = OperationAction.query_to_get_port_object(east, west)

        connections = Connection.objects.filter(east=east, west=west)

        if action == 'connect':
            connections.delete()
        else:
            connections.update(status='success', disconnected_date=None)

        ConnectionHistory.objects.filter(east=east, west=west).update(timestamp=datetime.now(), status='revoked')
        operations.delete()
        OperationHistory.objects.filter(uuid=uuid).update(finished_time=datetime.now(), status='revoked')

        return JsonResponse({'status': 'success'})
