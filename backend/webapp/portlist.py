from rest_framework.views import APIView
from rest_framework.response import Response
from webapp.models import Port
from webapp.serializers import PortSerializer


class PortList(APIView):

    def get(self, request):

        ports = Port.objects.all()
        serializer = PortSerializer(ports, many=True)

        return Response(serializer.data)

    def post(self, request):

        return Response(request.data)

