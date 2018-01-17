"""connectionhistorylist api
"""
import logging.handlers

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.views import status as drf_status

from webapp.libs.authorization import ValidationUser
from webapp.libs.connectionhistory_action_database import ConnectionHistoryAction
from webapp.models import ConnectionHistory

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

        return_data = []

        connh = ConnectionHistory.objects.all()
        for ch in connh:
            obj = {'id': str(ch.id), 'east': str(ch.east.number), 'west': str(ch.west.number),
                   'switching_type': str(ch.switching_type), 'timestamp': str(ch.timestamp), 'status': str(ch.status),
                   'username': str(ch.username)}
            return_data.append(obj)

        return Response(return_data, status=drf_status.HTTP_200_OK)

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

                # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
                IF type == 'connectionhistory'
                csv: csv file
        """

        if ValidationUser.validate_http_authorization(request) is True:

                request_data = JSONParser().parse(request)
                if 'id' in request_data and 'action' in request_data:
                    action = request_data['action']
                    history_id = request_data['id']

                    if action == 'canceled':

                        if ConnectionHistoryAction.cancel_task(action, history_id) is False:

                            error_detail = ({'detail': 'Not found this {} id in connectionhistory table'.format(
                                history_id)})
                            logger.error('connectionhistory_action.cancel_task method: error:{} request:{}'.format(
                                error_detail, request.META.get('HTTP_AUTHORIZATION')))
                            return_data = {'historyid': None, 'status': 'error'}
                            return Response(return_data, status=drf_status.HTTP_400_BAD_REQUEST)

                        else:
                            return ConnectionHistoryAction.cancel_task(action, history_id)

                elif 'action' in request_data:
                    action = request_data['action']

                    if action == 'cleardatabase':
                        return ConnectionHistoryAction.cleardatabase()

                    else:
                        return_data = ({'detail': 'Invalid input.'})
                        logger.error('post method: error:{} request:{}'.format(return_data, request))
                        return Response(return_data, status=drf_status.HTTP_400_BAD_REQUEST)

                # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
                elif 'type' in request_data:
                    action_type = request_data['type']

                    if action_type == 'connectionhistory':
                        return ConnectionHistoryAction.savedata()

                else:
                    return_data = ({'detail': 'Invalid input data'})
                    logger.error('post method: error:{} request:{}'.format(return_data, request))
                    return Response(return_data, status=drf_status.HTTP_400_BAD_REQUEST)

        else:
            return_data = ({'detail': 'Permission denied'})
            logger.error('validate_user.validate_http_authorization method: error:{} request:{}'.format(
                return_data, request.META.get('HTTP_AUTHORIZATION')))
            return Response(return_data, status=drf_status.HTTP_401_UNAUTHORIZED)

    def put(self, request):
        """PUT ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "PUT" not allowed.'}
        return Response(return_data, status=drf_status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """

        return_data = {'detail': 'Method "DELETE" not allowed.'}
        return Response(return_data, status=drf_status.HTTP_405_METHOD_NOT_ALLOWED)
