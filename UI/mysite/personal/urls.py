from django.conf.urls import url, include
from django.contrib import admin
from personal import views
# from personal.views import MyView
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^portconnection/', views.portconnection, name='portconnection'),
    url(r'^setting/', views.setting, name='setting'),
    url(r'^connection/', views.connection, name='connection'),
    url(r'^alarm/', views.alarm, name='alarm'),
    url(r'^alarm_history/', views.alarm_history, name='alarm_history'),
    url(r'^ports/', views.PortList.as_view()),
    url(r'^connections/', views.ConnectionList.as_view()),
    url(r'^connectionhistorys/', views.ConnectionHistoryList.as_view()),
    url(r'^alarms/', views.AlarmList.as_view()),
    url(r'^datalogs/', views.DatalogList.as_view()),
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    url(r'^(?P<question_id>[0-9]+)/(?P<timestamp>[0-9]+)/$', views.save, name='alarm_log'),
    ]

urlpatterns = format_suffix_patterns(urlpatterns)