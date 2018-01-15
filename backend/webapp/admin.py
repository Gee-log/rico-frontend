from django.contrib import admin
from webapp.models import Alarm, Connection, ConnectionHistory, Operation, OperationHistory, OperationSequence, Port, Taskcancelation, Robot, Role


class AlarmModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "detail" , "timestamp", "severity"]
    class Meta:
        model = Alarm

admin.site.register(Alarm, AlarmModelAdmin)

class ConnectionModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "east" , "west" , "connected_date", "disconnected_date", "status"]
    class Meta:
        model = Connection

admin.site.register(Connection, ConnectionModelAdmin)

class ConnectionHistoryModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "id", "east", "west", "switching_type", "timestamp", "status", "username"]
    class Meta:
        model = ConnectionHistory

admin.site.register(ConnectionHistory, ConnectionHistoryModelAdmin)

class OperationModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "robotnumber" , "uuid", "status", "request", "response"]
    class Meta:
        model = Operation

admin.site.register(Operation, OperationModelAdmin)

class OperationHistoryModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "uuid", "robotnumber", "created_time", "finished_time", "status", "request", "response"]
    class Meta:
        model = OperationHistory

admin.site.register(OperationHistory, OperationHistoryModelAdmin)

class OperationSequenceModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "sequence_number", "total_sequence"]
    class Meta:
        model = OperationSequence

admin.site.register(OperationSequence, OperationSequenceModelAdmin)

class PortModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "direction", "number", "note", "connection_counter"]
    class Meta:
        model = Port

admin.site.register(Port, PortModelAdmin)

class TaskcancelationModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "uuid", "mode", "robot", "continue_mode", "response"]
    class Meta:
        model = Taskcancelation

admin.site.register(Taskcancelation, TaskcancelationModelAdmin)

class RobotModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "robot_number"]
    class Meta:
        model = Robot

admin.site.register(Robot, RobotModelAdmin)

class RoleModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "user", "role", "status"]
    class Meta:
        model = Role

admin.site.register(Role, RoleModelAdmin)
