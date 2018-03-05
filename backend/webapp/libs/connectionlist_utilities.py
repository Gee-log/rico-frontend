"""connectionlist utilities
"""
from rest_framework.response import Response
from rest_framework.views import status

from webapp.models import Connection
from webapp.libs.get_available_port import GetAvailablePort


class ConnectionUtilities(object):

    @staticmethod
    def create_dummy_connection(request_data):
        """Create a connection in connection table

        Args:
            request_data: request data

        Returns:
            Json = ({'status': 'success', 'east': str(east), 'west': str(west)})
        """

        connected_east, connected_west = [], []
        east, west = GetAvailablePort.get_available_port(request_data)

        conns = Connection.objects.filter(disconnected_date=None)
        if conns is not None:

            for i in conns:
                obj_east = i.east
                obj_west = i.west
                connected_east.append(obj_east)
                connected_west.append(obj_west)

            if east not in connected_east and west not in connected_west:
                connections = Connection.objects.create(east=east, west=west, status='success')
                connections.save()
                return_data = {'status': 'success', 'east': str(east), 'west': str(west)}
                return Response(return_data, status=status.HTTP_200_OK)
            
            else:
                return_data = {'status': 'error', 'error': 'one or two of these ports is connected'}
                return Response(return_data, status=status.HTTP_200_OK)

        else:
            connections = Connection.objects.create(east=east, west=west, status='success')
            connections.save()
            return_data = {'status': 'success', 'east': str(east), 'west': str(west)}
            return Response(return_data, status=status.HTTP_200_OK)
