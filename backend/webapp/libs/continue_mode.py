"""continue mode
"""

import ast
import logging.handlers
import requests


from django.http import JsonResponse
from rest_framework.views import status

from webapp.models import Operation, OperationHistory, Robot, Taskcancelation
from webapp.views import CELERY_APP

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('continuemode')

# create a file handler
handler = logging.handlers.RotatingFileHandler('continuemode.log', maxBytes=10485760, backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ContinueMode(object):

    @staticmethod
    def validate_input_for_continue_mode(request):

        action = ''
        east = ''
        west = ''
        continue_mode = request.data['continue_mode']
        mode = request.data['mode']

        robot = 0
        sequence = ''
        operations_request = ''
        run_value = True
        request_object = None

        # query to get error sequence
        operations = Operation.objects.all()
        for o in operations:
            response_object = ast.literal_eval(o.response)
            request_object = ast.literal_eval(o.request)

            try:
                sequence = response_object['sequence']
            except ValueError as e:
                logger.error('validate_input_for_continue_mode method: sequence not found request: {}, error: {}'
                             .format(request_object, e))
                sequence = request_object['options']['current_sequence']

            run_value = request_object['options']['run']
            action = request_object['action']
            east = request_object['east']
            west = request_object['west']
            operations_request = o.request

        robots = Robot.objects.all()
        for r in robots:
            try:
                robot = r.robot_number
            except ValueError as e:
                resp = {'status': 'error', 'error': 'Empty robot number {} in database'.format(robot)}
                logger.error('validate_input_for_continue_mode method: empty robot number in database error: {}'
                             .format(e))
                return JsonResponse(resp, status=status.HTTP_400_BAD_REQUEST)

        # run_value is false when debug mode
        if run_value is False:
            stop = request_object['options']['stops']
            payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west,
                       'action': action, 'no': sequence, 'stops': stop}

        # run_value is true when not debug mode
        else:
            payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west,
                       'action': action, 'no': sequence}

        # check this robot number available or not
        if Robot.objects.filter(robot_number=robot):
            resp = requests.post(CELERY_APP + '/reset', data=payload)
            uuid = resp.text
            response = requests.get(CELERY_APP + '/result?id=' + uuid)
            response = response.json()
            operations = Operation.objects.all()
            operations.delete()

            if continue_mode == 'reload':
                operationhistorys = OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='reload',
                                                                    request=request.data, response=response)
                operationhistorys.save()
            else:
                operationhistorys = OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='started',
                                                                    request=request.data, response=response)
                operationhistorys.save()

            taskcancelations = Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode,
                                                              continue_mode=continue_mode, response=response)
            taskcancelations.save()
            operations = Operation.objects.create(uuid=uuid, robotnumber=robot, status='started', response=response,
                                                  request=operations_request)
            operations.save()

            logger.info('validate_input_for_continue_mode method: return data: {}'.format({'status': 'success'}))
            return JsonResponse({'status': 'success'}, status=status.HTTP_200_OK)

        else:
            resp = {'status': 'error', 'error': 'This robot number {} not available.'.format(robot)}
            logger.error('Wrong robot request: {} response: {}'.format(request, resp))
            return JsonResponse(resp, status=status.HTTP_400_BAD_REQUEST)
