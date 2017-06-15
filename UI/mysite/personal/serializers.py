from rest_framework import serializers
from personal.models import Port, Connection, Alarm, Datalog, ConnectionHistory

class PortSerializer(serializers.ModelSerializer):

    class Meta:
        model = Port 
        fields = ('direction', 'number')

class ConnectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Connection
        fields = ('east', 'west', 'connected_date', 'disconnected_date')

class AlarmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Alarm
        fields = ('alarm', 'timestamp', 'detail', 'severity')

class DatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Datalog
        fields = ('title', 'date', 'body')

class ConnectionHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ConnectionHistory
        fields = ('east', 'west', 'switching_type', 'timestamp')