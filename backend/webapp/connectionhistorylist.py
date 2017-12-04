"""connectionhistorylist api
"""
import logging.handlers

from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.views import status as drf_status

from webapp.models import ConnectionHistory
from webapp.libs import authorization, connectionhistory_action_database

# set validate_user
validate_user = authorization.ValidationUser

# set connectionhistoryaction
connectionhistory_action = connectionhistory_action_database.ConnectionHistoryAction

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionhistorylist')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionhistorylist.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ConnectionHistoryList(APIView):

    def get(self, request):
        """GET ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            json:
                id (string): object id
                east (string): east port object number
                west (string): west port object number
                switching_type (string): connection type
                timestamp (datetime): timestamp
                status (string): status code
        """

        data = []

        connh = ConnectionHistory.objects.all()
        for ch in connh:

            obj = {'id': str(ch.id), 'east': str(ch.east.number), 'west': str(ch.west.number),
                   'switching_type': str(ch.switching_type), 'timestamp': str(ch.timestamp), 'status': str(ch.status),
                   'username': str(ch.username)}
            data.append(obj)

        return Response(data, status=drf_status.HTTP_200_OK)

    def post(self, request):
        """POST ConnectionHistoryList API,
        If action == 'canceled' check condition then update database,
        If action == 'cleardatabase' check condition then update database

        # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
        IF type == 'connectionhistory' call savedata()

        Args:
            request: request data

        Returns:
                json:
                    If action == 'canceled':
                        id (string): object id
                        east (string): east port object number
                        west (string): west port object number
                        switching_type (string): connection type
                        timestamp (datetime): timestamp
                        status (string): status code

                HttpResponse:
                    IF action == 'cleardatabase':
                        HttpResponse: ('Clear database success !')

                # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
                IF type == 'connectionhistory'
                csv: csv file
        """

        if validate_user.validate_http_authorization(request) is True:

                if 'id' in request.data and 'action' in request.data and request.data['action'] == 'canceled':

                    if connectionhistory_action.cancel_task(request) is False:

                        history_id = request.data['id']
                        error_detail = ({'detail': 'Not found this {} id in connectionhistory table'.format(
                            history_id)})
                        logger.error('connectionhistory_action.cancel_task method: error:{} request:{}'.format(
                            error_detail, request.META.get('HTTP_AUTHORIZATION')))

                        return JsonResponse({'historyid': None, 'status': 'error'},
                                            status=drf_status.HTTP_400_BAD_REQUEST)

                    else:

                        return connectionhistory_action.cancel_task(request)

                elif 'action' in request.data and request.data['action'] == 'cleardatabase':

                    return connectionhistory_action.cleardatabase()

                # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
                elif 'type' in request.data and request.data['type'] == 'connectionhistory':

                    return connectionhistory_action.savedata()

                else:

                    error_detail = ({'detail': 'Invalid input data'})
                    logger.error('post method: error:{} request:{}'.format(error_detail, request))
                    return Response(error_detail, status=drf_status.HTTP_400_BAD_REQUEST)

        else:
            error_detail = ({'detail': 'Permission denied'})
            logger.error('validate_user.validate_http_authorization method: error:{} request:{}'.format(
                error_detail, request.META.get('HTTP_AUTHORIZATION')))

            return Response(error_detail, status=drf_status.HTTP_401_UNAUTHORIZED)

    def put(self, request):
        """PUT ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "PUT" not allowed.'}
        return Response(error_detail, status=drf_status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=drf_status.HTTP_405_METHOD_NOT_ALLOWED)
