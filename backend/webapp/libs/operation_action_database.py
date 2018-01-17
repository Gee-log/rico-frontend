"""operation action database
"""
import ast
import logging.handlers

from celery.task.control import revoke
from datetime import datetime
from rest_framework.response import Response
from rest_framework.views import status

from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory, Port
from webapp.views import walk


# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('operation_action_database')

# create a file handler
handler = logging.handlers.RotatingFileHandler('operation_action_database.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


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
        if operations:
            for o in operations:
                request_obj = ast.literal_eval(o.request)
                action = request_obj['action']
                east = request_obj['east']
                west = request_obj['west']
                uuid = o.uuid

            if walk.is_dummy() is False:
                revoke(uuid, terminate=True)            
            
            east, west = OperationAction.query_to_get_port_object(east, west)
            connections = Connection.objects.filter(east=east, west=west)

            if action == 'connect':
                connections.delete()
            else:
                connections.update(status='success', disconnected_date=None)

            connectionhistorys = ConnectionHistory.objects.filter(east=east, west=west)
            connectionhistorys.update(timestamp=datetime.now(), status='revoked')
            operations.delete()
            operationhistorys = OperationHistory.objects.filter(uuid=uuid)
            operationhistorys.update(finished_time=datetime.now(), status='revoked')

            return_data = {'status': 'success'}
            logger.info('operation_action_database response method return data {}'.format(return_data))
            return Response(return_data, status=status.HTTP_200_OK)

        else:
            return_data = {'status': 'error', 'error': 'Empty operation table'}
            logger.error('operation_action_database clear_latest_operation method: {}'.format(return_data))
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)
