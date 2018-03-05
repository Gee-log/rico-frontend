"""tasktranslation api
"""
import logging.handlers

from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import JsonResponse

from webapp.libs import continue_mode
from webapp.models import Taskcancelation, Robot
from webapp.serializers import TaskcancelationSerializer

# set continue_mode
is_continue_mode = continue_mode.ContinueMode

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('taskcancelation')

# create a file handler
handler = logging.handlers.RotatingFileHandler('taskcancelation.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


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

        if 'mode' in request.data and 'continue_mode' in request.data and 'action' in request.data \
                and 'east' in request.data and 'west' in request.data:

            return is_continue_mode.validate_input_for_continue_mode(request)

        elif 'mode' not in request.data:
            return JsonResponse({'status': 'error', 'error': 'No mode input'}, status=status.HTTP_400_BAD_REQUEST)

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
