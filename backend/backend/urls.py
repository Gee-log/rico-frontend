"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from webapp import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^alarms/', views.AlarmList.as_view()),
    url(r'^canceltask/', views.canceltask, name='canceltask'),
    url(r'^connections/', views.ConnectionList.as_view()),
    url(r'^connectionhistorys/', views.ConnectionHistoryList.as_view()),
    url(r'^checktask/', views.checktask, name='checktask'),
    url(r'^ports/', views.PortList.as_view()),
    url(r'^pendingtask/', views.pendingtask, name='pendingtask'),
    url(r'^(?P<question_id>[0-9]+)/$', views.save, name='connection_log'),
    url(r'^(?P<question_id>[0-9]+)/(?P<timestamp>[0-9]+)/$', views.save, name='alarm_log'),
    url(r'^frontend/', views.index, name='index'),
]
