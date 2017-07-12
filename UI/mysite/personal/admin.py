from django.contrib import admin
from personal.models import Port, Connection, Alarm, ConnectionHistory, Operation, OperationTask

admin.site.register(Port)


class ConnectionModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "east" , "west" , "connected_date", "disconnected_date", "status"]
    class Meta:
        model = Connection

admin.site.register(Connection, ConnectionModelAdmin)

class ConnectionHistoryModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "east", "west", "switching_type", "timestamp", "status"]
    class Meta:
        model = ConnectionHistory

admin.site.register(ConnectionHistory, ConnectionHistoryModelAdmin)

class AlarmModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "detail" , "timestamp", "severity"]
    class Meta:
        model = Alarm

admin.site.register(Alarm, AlarmModelAdmin)

class OperationModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "robotnumber" , "uuid", "status", "request"]
    class Meta:
        model = Operation

admin.site.register(Operation, OperationModelAdmin)

class OperationTaskModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "uuid", "robotnumber", "created_time", "finished_time", "status"]
    class Meta:
        model = OperationTask

admin.site.register(OperationTask, OperationTaskModelAdmin)

