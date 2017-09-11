from django.conf.urls import url

from webapp import views
from webapp import connectionlist
from webapp import connectionhistorylist
from webapp import alarmlist
from webapp import portlist

urlpatterns = [
    url(r'^alarms/', alarmlist.AlarmList.as_view()),
    url(r'^connections/', connectionlist.ConnectionList.as_view()),
    url(r'^connectionhistorys/', connectionhistorylist.ConnectionHistoryList.as_view()),
    url(r'^checktask/', views.checktask, name='checktask'),
    url(r'^ports/', portlist.PortList.as_view()),
    url(r'^pendingtask/', views.pendingtask, name='pendingtask'),
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    url(r'^frontend/', views.index, name='index'),
    url(r'^$', views.landing, name='landing'),
    # url(r'', views.index, name='index')
]
