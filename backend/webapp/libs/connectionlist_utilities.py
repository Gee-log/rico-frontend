"""connectionlist utilities
"""
from django.http import JsonResponse

from webapp.models import Connection
from webapp.libs.get_available_port import GetAvailablePort


class ConnectionUtilities(object):

    @staticmethod
    def create_dummy_connection(request):
        """Create a connection in connection table

        Args:
            request: request data

        Returns:
            Json = ({'status': 'success', 'east': str(east), 'west': str(west)})
        """

        connected_east, connected_west = [], []
        east, west = GetAvailablePort.get_available_port(request)

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
                return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
            
            else:
                return JsonResponse({'status': 'error', 'error': 'one or two of these ports is connected'})

        else:
            connections = Connection.objects.create(east=east, west=west, status='success')
            connections.save()
            return JsonResponse({'status': 'success', 'east': str(east), 'west': str(west)})
 