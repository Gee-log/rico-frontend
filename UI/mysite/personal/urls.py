from django.conf.urls import url, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^portconnection/', views.portconnection, name='portconnection'),
    url(r'^setting/', views.setting, name='setting'),
    url(r'^connection/', views.connection, name='connection'),
    url(r'^alarm/', views.alarm, name='alarm'),
    url(r'^alarm_history/', views.alarm_history, name='alarm_history'),
    url(r'^robot_debug/', views.robot, name='robot_debug'),
    url(r'^ports/', views.PortList.as_view()),
    url(r'^connections/', views.ConnectionList.as_view()),
    url(r'^connectionhistorys/', views.ConnectionHistoryList.as_view()),
    url(r'^alarms/', views.AlarmList.as_view()),
    url(r'^operations/', views.OperationList.as_view()),
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    url(r'^(?P<question_id>[0-9]+)/(?P<timestamp>[0-9]+)/$', views.save, name='alarm_log'),
    url(r'^login/', views.login_view, name='login'),
    url(r'', include('django.contrib.auth.urls')),
    url(r'^test/', views.test, name='test'),
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
