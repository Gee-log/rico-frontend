"""tasktranslation api
"""
import requests
import ast
from rest_framework.views import APIView, status
from rest_framework.response import Response
# from rest_framework.authtoken.models import Token
from django.http import HttpResponse, JsonResponse

from webapp.models import Taskcancelation, Robot, Operation, Connection, ConnectionHistory
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

        if 'mode' in request.data and 'robot' in request.data and 'continue_mode' in request.data:

            mode = request.data['mode']
            robot = request.data['robot']
            continue_mode = request.data['continue_mode']

            payload = {'mode': mode, 'robot': robot, 'continue_mode': continue_mode}

            if Robot.objects.filter(robot_number=robot):
                
                resp = requests.post(CELERY_APP + '/reset', data=payload)

                uuid = resp.text

                response = requests.get(CELERY_APP + '/result?id=' + uuid)

                response = response.json()

                operations = Operation.objects.all()
                for i in operations:
                    obj = ast.literal_eval(i.request)
                    east = obj['east']
                    west = obj['west']

                    if continue_mode == 'restart':

                        Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode, continue_mode=continue_mode, response=response)
                        Connection.objects.filter(status='started').update(status='success')
                        ConnectionHistory.objects.filter(status=['pending', 'started']).update(status='success')
                        Operation.objects.update(uuid=uuid, robotnumber=robot, status='success', response=None)

                    elif continue_mode == 'reload':

                        Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode, continue_mode=continue_mode, response=response)
                        Connection.objects.filter(status='started').update(status='success')
                        ConnectionHistory.objects.filter(status=['pending', 'started']).update(status='success')
                        Operation.objects.update(uuid=uuid, robotnumber=robot, status='success', response=None)

                    elif continue_mode == 'continue':

                        Taskcancelation.objects.create(uuid=uuid, robot=robot, mode=mode, continue_mode=continue_mode, response=response)
                        Connection.objects.filter(status='started').update(status='success')
                        ConnectionHistory.objects.filter(status=['pending', 'started']).update(status='success')
                        Operation.objects.update(uuid=uuid, robotnumber=robot, status='success', response=None)

                return HttpResponse('Success', status=status.HTTP_200_OK)

            return HttpResponse('This robot number {} not available.'.format(robot), status=status.HTTP_400_BAD_REQUEST)
        
        elif 'mode' not in request.data:
            
            return HttpResponse('No mode input', status=status.HTTP_400_BAD_REQUEST)

        elif 'robot' not in request.data:
            
            return HttpResponse('No robot input', status=status.HTTP_400_BAD_REQUEST)

        elif 'continue_mode' not in request.data:
            
            return HttpResponse('No continue mode input', status=status.HTTP_400_BAD_REQUEST)

        else:
            
            return HttpResponse('Error input', status=status.HTTP_400_BAD_REQUEST)

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
