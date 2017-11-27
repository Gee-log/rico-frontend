from django.conf.urls import url
from rest_framework.authtoken import views as rest_framework_views

from webapp import alarmlist
from webapp import connectionlist
from webapp import connectionhistorylist
from webapp import operationhistorylist
from webapp import operationlist
from webapp import portlist
from webapp import taskcancelation
from webapp import userlist
from webapp import views
from webapp import verify_backend


urlpatterns = [
    # redirect to landing page
    url(r'^$', views.landing, name='landing'),
    # call save method
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    # alarms api
    url(r'^alarms/', alarmlist.AlarmList.as_view()),
    # call checktask method
    url(r'^checktask/', views.checktask, name='checktask'),
    # connections api
    url(r'^connections/', connectionlist.ConnectionList.as_view()),
    # connectionhistorys api
    url(r'^connectionhistorys/', connectionhistorylist.ConnectionHistoryList.as_view()),
    # call frontend app
    url(r'^frontend/', views.index, name='index'),
    # Session Login
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),
    # call home method
    url(r'^homes/', views.homes, name='homes'),
    # operations api
    url(r'^operations/', operationlist.OperationList.as_view()),
    # operationhistorys api
    url(r'^operationhistorys/', operationhistorylist.OperationHistoryList.as_view()),
    # call pendingtask method
    url(r'^pendingtask/', views.pendingtask, name='pendingtask'),
    # ports api
    url(r'^ports/', portlist.PortList.as_view()),
    # tasktranslation api
    url(r'^taskcancelations', taskcancelation.TaskcancelationList.as_view()),
    # user api
    url(r'^users/', userlist.RoleList.as_view()),
    # verify user with backend
    url(r'^verify_user/', verify_backend.Verify_user.as_view())
]
