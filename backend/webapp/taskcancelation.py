"""tasktranslation api
"""
import logging.handlers

from rest_framework.parsers import JSONParser
from rest_framework.views import APIView, status
from rest_framework.response import Response

from webapp.libs.continue_mode import ContinueMode
from webapp.models import Taskcancelation
from webapp.serializers import TaskcancelationSerializer

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
        return Response(serializer.data, status=status.HTTP_200_OK)

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

        request_data = JSONParser().parse(request)

        if 'mode' and 'continue_mode' in request_data:
            mode = request_data['mode']
            continue_mode = request_data['continue_mode']
            return ContinueMode.validate_input_for_continue_mode(request_data, mode, continue_mode)

        elif 'mode' not in request.data:
            return_data = {'status': 'error', 'error': 'No mode input.'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        elif 'continue_mode' not in request.data:
            return_data = {'status': 'error', 'error': 'No continue_mode input.'}
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

        else:
            return_data = {'status': 'error', 'error': 'Invalid input.'} 
            return Response(return_data, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        """PUT TasktranslationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE TasktranslationList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
