"""Query to get available port in database
"""
import logging.handlers

from webapp.models import Port

# set logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('get_available_port')

# create a file handler
handler = logging.handlers.RotatingFileHandler('get_available_port.log', maxBytes=10485760,
                                               backupCount=10, encoding='utf-8')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(handler)


class GetAvailablePort(object):

    @staticmethod
    def get_available_port(request):
        """Query available port in database

        Args:
            request: request data

        Returns:
            east (object): west port
            west (object): east port
        """

        east, west = None, None

        e = int(request.data['east'])
        w = int(request.data['west'])

        # find available ports
        ports = Port.objects.all()
        for p in ports:

            if p.direction == 'E' and p.number == e:
                east = p
                logger.info('east %s', east)

            if p.direction == 'W' and p.number == w:
                west = p
                logger.info('west %s', west)

        return east, west
