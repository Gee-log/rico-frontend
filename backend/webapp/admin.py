from django.contrib import admin
from webapp.models import Port, Connection, Alarm, ConnectionHistory, Operation, OperationHistory, Role


class PortModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "direction", "number", "note", "connection_counter"]
    class Meta:
        model = Port

admin.site.register(Port, PortModelAdmin)

class RoleModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "user", "role"]
    class Meta:
        model = Role

admin.site.register(Role, RoleModelAdmin)

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

class AlarmModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "detail" , "timestamp", "severity"]
    class Meta:
        model = Alarm

admin.site.register(Alarm, AlarmModelAdmin)

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

