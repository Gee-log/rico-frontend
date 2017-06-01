from django.shortcuts import render
from django.template.response import TemplateResponse
from personal.models import Connection, Port


def index(request):
	return render(request, 'personal/header.html')

def portconnection(request):
	data = Port.objects.all()
	data2 = Connection.objects.all()
	return TemplateResponse(request, 'personal/portconnection.html', { "data": data , "data2": data2})

def datalog(request):
	data = Connection.objects.all()
	return TemplateResponse(request, 'personal/datalog.html', { "data": data })

def setting(request):
	return render(request, 'personal/setting.html')

def alarm(request):
	return render(request, 'personal/alarm.html')

def alarm_history(request):
	return render(request, 'personal/alarm_history.html')



	