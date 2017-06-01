from django.conf.urls import url, include
from . import views
from django.views.generic import ListView, DetailView
from personal.models import Connection, Port


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^portconnection/', views.portconnection, name='portconnection'),
    url(r'^setting/', views.setting, name='setting'),
    url(r'^datalog/', views.datalog, name='datalog'),
    url(r'^alarm/', views.alarm, name='alarm'),
    url(r'^alarm_history/', views.alarm_history, name='alarm_history'),
    ]