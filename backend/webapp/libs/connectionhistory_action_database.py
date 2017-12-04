"""connectionhistory action database
"""
import logging.handlers

from celery.task.control import revoke
from datetime import datetime
from django.utils import timezone
from django.http import JsonResponse, HttpResponse
from rest_framework.views import status as drf_status

from webapp.models import Connection, ConnectionHistory, Operation, OperationHistory

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('connectionhistory_action_database')

# create a file handler
handler = logging.handlers.RotatingFileHandler('connectionhistory_action_database.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class ConnectionHistoryAction(object):

    @staticmethod
    def cancel_task(request):
        historyid = int(request.data['id'])
        status = request.data['action']
        action = ''
        east = ''
        west = ''

        connectionhistorys = ConnectionHistory.objects.filter(id=historyid)

        if connectionhistorys is None:
            return False

        for c in connectionhistorys:
            action = c.switching_type
            east = c.east
            west = c.west

        connections = Connection.objects.filter(east=east, west=west, status=['pending', 'break', 'started'],
                                                disconnected_date=None)

        if action == 'C':
            connections.delete()

        else:
            connections.update(status='success', disconnected_date=None)

        connectionhistorys = ConnectionHistory.objects.filter(id=historyid)
        connectionhistorys.update(status=status)

        operations = Operation.objects.all()
        for o in operations:
            revoke(o.uuid, terminate=True)

        return JsonResponse({'historyid': historyid, 'status': status}, status=drf_status.HTTP_200_OK)

    @staticmethod
    def cleardatabase():

        try:
            status = 'success'

            Connection.objects.all().delete()
            # ConnectionHistory.objects.all().delete()
            Operation.objects.all().delete()
            OperationHistory.objects.all().delete()
            return JsonResponse({'status': status}, status=drf_status.HTTP_200_OK)

        except ValueError:
            status = 'failed'

            logger.error('cleardatabase method: error:{}'.format(ValueError))
            return JsonResponse({'status': status}, status=drf_status.HTTP_400_BAD_REQUEST)

    # TODO SAVE CSV BY CALLING FROM FUNCTION IN FRONTEND
    @staticmethod
    def savedata():
        """Save CSV files

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
