from django.conf.urls import url

from webapp import views
from webapp import connectionlist
from webapp import connectionhistorylist
from webapp import alarmlist
from webapp import portlist
from webapp import operationlist
from webapp import operationhistorylist
from webapp import userlist
from webapp import tasktranslation

from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    # alarms api
    url(r'^alarms/', alarmlist.AlarmList.as_view()),
    # connections api
    url(r'^connections/', connectionlist.ConnectionList.as_view()),
    # connectionhistorys api
    url(r'^connectionhistorys/', connectionhistorylist.ConnectionHistoryList.as_view()),
    # call checktask method
    url(r'^checktask/', views.checktask, name='checktask'),
    # ports api
    url(r'^ports/', portlist.PortList.as_view()),
    # call pendingtask method
    url(r'^pendingtask/', views.pendingtask, name='pendingtask'),
    # operations api
    url(r'^operations/', operationlist.OperationList.as_view()),
    # operationhistorys api
    url(r'^operationhistorys/', operationhistorylist.OperationHistoryList.as_view()),
    # call save method
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    # call frontend app
    url(r'^frontend/', views.index, name='index'),
    # call home method
    url(r'^homes/', views.homes, name='homes'),
    # user api
    url(r'^users/', userlist.RoleList.as_view()),
    # tasktranslation api
    url(r'^tasktranslations', tasktranslation.TasktranslationList.as_view()),
    # redirect to landing page
    url(r'^$', views.landing, name='landing'),
    # Session Login
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),
]
