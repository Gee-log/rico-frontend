from django.db import models
from django.db.models import IntegerField
from django.core.validators import MinValueValidator, MaxValueValidator 
from django.utils import timezone




class Datalog(models.Model):
    title = models.CharField(max_length=140) 
    body = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    @classmethod
    def create(cls, title,body):
        datalog = cls(title=title,body=body)
        # do something with the book
        return datalog

    def __str__(self):
        return self.title



class Port(models.Model):

    DIRECTION_TYPE = (
            ('E', 'East'),
            ('W', 'West'),
            )

    direction = models.CharField(max_length=1, choices=DIRECTION_TYPE)
    number = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(144)])


    def __str__(self):
        return self.direction + str(self.number)

class Connection(models.Model):

    STATUS_TYPE = (
        ('0', 'Avaliable'),
        ('1', 'Unavaliable'),
        ('2', 'Selected'),
        )

    east = models.ForeignKey(Port, related_name='east')
    west = models.ForeignKey(Port, related_name='west')
    connected_date = models.DateTimeField(auto_now_add=True)
    disconnected_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=1, choices=STATUS_TYPE, default='0')

    @classmethod
    def create(cls, east, west):
        connect = cls(east=east,west=west)
        # do something with the book
        return connect

    class Meta:
        ordering = ['east']

    def __str__(self):
        return 'East ' + str(self.east.number) + ' -> West ' + str(self.west.number) + ': ' + str(self.connected_date)

class Alarm(models.Model):
    ALARM_TYPE = (
            ('S', 'Soft Alarm'),
            ('H', 'Hard Alarm'),
            ('W', 'Warning'),
            )
    alarm = models.CharField(max_length=1, choices=ALARM_TYPE)
    timestamp = models.DateTimeField(auto_now_add=True)
    detail = models.CharField(max_length=64)