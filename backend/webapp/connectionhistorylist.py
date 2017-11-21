"""connectionhistorylist api
"""
from celery.task.control import revoke
from datetime import datetime
from django.utils import timezone
from django.http import JsonResponse, HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.views import status as drf_status

from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory
from webapp.views import logger
#  from webapp.serializers import ConnectionHistorySerializer


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
                   'switching_type': str(ch.switching_type), 'timestamp': str(ch.timestamp), 'status': str(ch.status), 'username': str(ch.username)}
            data.append(obj)

        return Response(data)

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

        # Validate authorization
        if request.META.get('HTTP_AUTHORIZATION'):
    
            # Set token
            token = request.META.get('HTTP_AUTHORIZATION')

            # Check token is exist in database or not
            if Token.objects.all().filter(key=token):

                if 'id' in request.data and 'action' in request.data and request.data['action'] == 'canceled':
                    historyid = request.data['id']
                    status = request.data['action']

                    connh = ConnectionHistory.objects.all().filter(id=historyid)
                    conn = Connection.objects.all()
                    for i in connh:

                        for c in conn:

                            if i.switching_type == 'C' and c.disconnected_date is None:
                                Connection.objects.filter(east=i.east, west=i.west, status='pending').delete()
                                Connection.objects.filter(east=i.east, west=i.west, status='break').delete()
                                Connection.objects.filter(east=i.east, west=i.west, status='started').delete()

                            elif i.switching_type == 'D' and c.disconnected_date is None:
                                Connection.objects.filter(east=i.east, west=i.west, status='pending').update(
                                    status='success', disconnected_date=None)
                                Connection.objects.filter(east=i.east, west=i.west, status='break').update(
                                    status='success', disconnected_date=None)
                                Connection.objects.filter(east=i.east, west=i.west, status='started').update(
                                    status='success', disconnected_date=None)

                    ConnectionHistory.objects.filter(id=historyid).update(status=status)

                    operations = Operation.objects.all()
                    for o in operations:
                        revoke(o.uuid, terminate=True)

                    Operation.objects.all().delete()

                    return JsonResponse({'historyid': historyid, 'action': status})

                elif 'action' in request.data and request.data['action'] == 'cleardatabase':

                    Connection.objects.all().delete()
                    # ConnectionHistory.objects.all().delete()
                    Operation.objects.all().delete()
                    OperationHistory.objects.all().delete()

                    return HttpResponse('Clear database success !')

                # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
                if 'type' in request.data and request.data['type'] == 'connectionhistory':

                    return self.savedata(request)

            else:

                error_detail = {'detail': 'Permission denied'}
                return Response(error_detail, status=drf_status.HTTP_401_UNAUTHORIZED)
        
        else:

            error_detail = {'detail': 'Permission denied'}
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
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request):
        """DELETE ConnectionHistoryList API

        Args:
            request: request data

        Returns:
            content (string): error detail
            status (string): HTTP status
        """
        
        error_detail = {'detail': 'Method "DELETE" not allowed.'}
        return Response(error_detail, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
    def savedata(self, request):
        """Save CSV files

        Args:
            request: request data

        Returns:
            csv: csv file
        """

        # for Python 3.x use below !
        from io import StringIO
        # for Python 2.7 or earlier use below !
        # import StringIO
        import csv
        timestamp = datetime.now()
        qus = '1'

        logger.info('question_id', '1', 'timestamp', timestamp)

        # write file
        # for WINDOW OS use below !
        data = StringIO()

        # for Linux OS use below !
        # data = StringIO.StringIO()

        # load file
        data.seek(0)
        response = HttpResponse(data, content_type='text/csv')

        if qus == '1':  # connection_log
            download_name = 'connection_log.csv'
            response['Content-Disposition'] = "attachment; filename=%s" % download_name
            writer = csv.writer(response)
            writer.writerow(['Time', 'Type', 'East Port', 'West Port'])

            connection = ConnectionHistory.objects.all()
            for con in connection:

                if con.switching_type == 'C':
                    writer.writerow(
                        [timezone.localtime(con.timestamp), 'connected', con.east, con.west])

                else:
                    writer.writerow(
                        [timezone.localtime(con.timestamp), 'disconnected', con.east, con.west])

        return response
