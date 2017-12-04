"""continue mode
"""

import ast
import requests

from django.http import JsonResponse
from rest_framework.views import status

from webapp.models import Operation, OperationHistory, Robot, Taskcancelation
from webapp.views import CELERY_APP


class ContinueMode(object):

    @staticmethod
    def validate_input_for_continue_mode(request):

        mode = request.data['mode']
        robot = request.data['robot']
        continue_mode = request.data['continue_mode']
        action = request.data['action']
        east = request.data['east']
        west = request.data['west']
        sequence = ''
        operations_request = ''
        run_value = True
        obj_request = {'options: {stops: 0}'}

        # Query to get error sequence
        operations = Operation.objects.all()
        for o in operations:
            obj_response = ast.literal_eval(o.response)
            obj_request = ast.literal_eval(o.request)

            try:
                sequence = obj_response['sequence']

            except ValueError:
                sequence = obj_request['options']['current_sequence']

            run_value = obj_request['options']['run']
            operations_request = o.request

        # run_value is false when debug mode
        if run_value is False:
            stop = obj_request['options']['stops']
            payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west,
                       'action': action, 'no': sequence, 'stops': stop}

        # run_value is true when not debug mode
        else:
            payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west,
                       'action': action, 'no': sequence}

            # Check this robot number available or not
        if Robot.objects.filter(robot_number=robot):
            resp = requests.post(CELERY_APP + '/reset', data=payload)
            uuid = resp.text
            response = requests.get(CELERY_APP + '/result?id=' + uuid)
            response = response.json()
            operations.delete()

            if continue_mode == 'reload':
                OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='reload', request=request.data,
                                                response=response)

            else:
                OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='started', request=request.data,
                                                response=response)

            Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode, continue_mode=continue_mode,
                                           response=response)
            operations.create(uuid=uuid, robotnumber=robot, status='started', response=response,
                              request=operations_request)
            return JsonResponse({'status': 'success'}, status=status.HTTP_200_OK)

        else:
            return JsonResponse({'status': 'error', 'error': 'This robot number {} not available.'.format(robot)},
                                status=status.HTTP_400_BAD_REQUEST)
