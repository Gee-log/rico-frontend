from rest_framework import serializers
from webapp.models import Alarm, Connection, ConnectionHistory, Operation, OperationHistory, OperationSequence, Port, Taskcancelation, Robot, Role


class PortSerializer(serializers.ModelSerializer):

    class Meta:
        model = Port
        fields = ('direction', 'number', 'note', 'connection_counter', 'id')


class ConnectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Connection
        fields = ('east', 'west', 'connected_date', 'disconnected_date', 'status')


class AlarmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Alarm
        fields = ('alarm', 'timestamp', 'detail', 'severity')


class ConnectionHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ConnectionHistory
        fields = ('id', 'east', 'west', 'switching_type', 'timestamp', 'status', 'username')


class OperationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Operation
        fields = ('robotnumber', 'uuid', 'status', 'request', 'response')


class OperationHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = OperationHistory
        fields = ('uuid', 'robotnumber', 'created_time', 'finished_time', 'status', 'request', 'response')


class OperationSequenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OperationSequence
        fields = ('sequence_number')


class RoleSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')

    class Meta:
        model = Role
        fields = ('id', 'username', 'email', 'role')


class TaskcancelationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Taskcancelation
        fields = ('uuid', 'robot', 'mode', 'continue_mode', 'response')
