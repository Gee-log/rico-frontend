from django.conf.urls import url
from rest_framework.authtoken import views as rest_framework_views

from webapp import alarmlist
from webapp import connectionlist
from webapp import connectionhistorylist
from webapp import create_user
from webapp import operationlist
from webapp import operationhistorylist
from webapp import operationsequencelist
from webapp import portlist
from webapp import taskcancelation
from webapp import userlist
from webapp import verify_user
from webapp import views


urlpatterns = [
    url(r'^$', views.landing, name='Redirect to landing page'),
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='Get connection log'),
    url(r'^alarms/', alarmlist.AlarmList.as_view(), name='Alarms api'),
    url(r'^checktask/', views.checktask, name='Check robot current task status'),
    url(r'^connections/', connectionlist.ConnectionList.as_view(), name='Connections api'),
    url(r'^connectionhistorys/', connectionhistorylist.ConnectionHistoryList.as_view(), name='Connectionhistorys api'),
    url(r'^create_user/', create_user.CreateUser.as_view(), name='Create user api'),
    url(r'^frontend/', views.index, name='Redirect to frontend application'),
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='Get auth token'),
    url(r'^utilities/homes/', views.homes, name='Call robot homes method'),
    url(r'^utilities/rollback/', views.rollback, name='Rollback smu position'),
    url(r'^utilities/self_connect/', views.self_connection, name='Self connect/disconnect smu'),
    url(r'^operations/', operationlist.OperationList.as_view(), name='Operations api'),
    url(r'^operationhistorys/', operationhistorylist.OperationHistoryList.as_view(), name='Operationhistorys api'),
    url(r'^operationsequences/', operationsequencelist.OperationSequencelist.as_view(), name='Operationsequences api'),
    url(r'^ports/', portlist.PortList.as_view(), name='Ports api'),
    url(r'^taskcancelations/', taskcancelation.TaskcancelationList.as_view(), name='Taskcancelations api'),
    url(r'^users/', userlist.RoleList.as_view(), name='Users api'),
    url(r'^verify_user/', verify_user.VerifyUser.as_view(), name='Verify user api')
]
