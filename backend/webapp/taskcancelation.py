"""tasktranslation api
"""
import requests
import ast
import ctypes
from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse

from webapp.models import Taskcancelation, Robot, Operation, OperationHistory
from webapp.serializers import TaskcancelationSerializer
from webapp.views import logger, CELERY_APP


class TaskcancelationList(APIView):

    def get(self, request):
        """GET TasktranslationList API

        Args:
            request: request data

        Returns:
            json:
                uuid (uuid4) : object uuid
                mode (string) : robot mode
                robot (string) : robot number
                continue_mode (string) : continue mode
                response (string) : response message
        """

        tasktranslations = Taskcancelation.objects.all()
        serializer = TaskcancelationSerializer(tasktranslations, many=True)

        return Response(serializer.data)

    def post(self, request):
        """POST TasktranslationList API

        Args:
            request: request data
        
        Returns:
            json:
                mode (string) : robot mode
                robot (string) : robot number
                continue_mode (string) : continue mode
        """

        if 'mode' in request.data and 'robot' in request.data and 'continue_mode' in request.data and 'action' \
                in request.data and 'east' in request.data and 'west' in request.data:

            mode = request.data['mode']
            robot = request.data['robot']
            continue_mode = request.data['continue_mode']
            action = request.data['action']
            east = request.data['east']
            west = request.data['west']
            sequence = ''
            stop = ''
            operations_request = ''

            # Query to get error sequence
            operations = Operation.objects.all()
            for o in operations:
                obj_response = ast.literal_eval(o.response)
                obj_request = ast.literal_eval(o.request)
                sequence = obj_response['sequence']
                run_value = obj_request['options']['run']
                operations_request = o.request

            # run_value = false when debug mode
            if run_value is False:
                stop = obj_request['options']['stops']
                payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west, 'action': action, 'no': sequence, 'stops': stop}
            
            # run_value = true when not debug mode
            else:
                payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode, 'east': east, 'west': west, 'action': action, 'no': sequence} 

            # Check this robot number available or not
            if Robot.objects.filter(robot_number=robot):
                
                resp = requests.post(CELERY_APP + '/reset', data=payload)

                uuid = resp.text

                response = requests.get(CELERY_APP + '/result?id=' + uuid)

                response = response.json()

                operations.delete()
                    
                if continue_mode == 'reload': 
                    OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='reload', request=request.data, response=response)
                
                else:
                    OperationHistory.objects.create(uuid=uuid, robotnumber=robot, status='started', request=request.data, response=response)

                Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode, continue_mode=continue_mode, response=response)
                operations.create(uuid=uuid, robotnumber=robot, status='started', response=response, request=operations_request)

                return JsonResponse({'status': 'success'}, status=status.HTTP_200_OK)

            else:
                return JsonResponse({'status': 'error', 'error': 'This robot number {} not available.'.format(robot)}, status=status.HTTP_400_BAD_REQUEST)

        elif 'mode' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No mode input'}, status=status.HTTP_400_BAD_REQUEST)

        elif 'robot' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No robot input'}, status=status.HTTP_400_BAD_REQUEST)

        elif 'continue_mode' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No continue mode input'}, status=status.HTTP_400_BAD_REQUEST)

        elif 'action' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No action mode input'}, status=status.HTTP_400_BAD_REQUEST)

        elif 'east' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No east mode input'}, status=status.HTTP_400_BAD_REQUEST)       

        elif 'west' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No west mode input'}, status=status.HTTP_400_BAD_REQUEST)         

        else:
            return JsonResponse({'status': 'error', 'error': 'Invalid input.'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """PUT TasktranslationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE TasktranslationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)
