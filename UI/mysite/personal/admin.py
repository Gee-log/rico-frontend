from django.contrib import admin
from personal.models import Datalog, Port, Connection, Alarm

admin.site.register(Datalog)
admin.site.register(Port)
admin.site.register(Connection)
admin.site.register(Alarm)