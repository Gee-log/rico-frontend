from django.contrib import admin
from personal.models import Port, Connection, Alarm, ConnectionHistory

admin.site.register(Port)
admin.site.register(ConnectionHistory)


class ConnectionModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "east" , "west" , "connected_date", "disconnected_date"]
    class Meta:
        model = Connection

admin.site.register(Connection, ConnectionModelAdmin)


class AlarmModelAdmin(admin.ModelAdmin):
    list_display = ["__str__", "detail" , "timestamp", "severity"]
    class Meta:
        model = Alarm

admin.site.register(Alarm, AlarmModelAdmin)


