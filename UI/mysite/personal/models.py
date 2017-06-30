import uuid
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



class Port(models.Model):
    DIRECTION_TYPE = (
        ('E', 'East'),
        ('W', 'West'),
    )

    direction = models.CharField(max_length=1, choices=DIRECTION_TYPE)
    number = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(144)])
    note = models.CharField(max_length=64, null=True)

    def __str__(self):
        return self.direction + str(self.number)


class Connection(models.Model):
    STATUS_TYPE = (
        ('0', 'Available'),
        ('1', 'Unavailable'),
        ('2', 'Selected'),
    )

    east = models.ForeignKey(Port, related_name='east')
    west = models.ForeignKey(Port, related_name='west')
    connected_date = models.DateTimeField(auto_now_add=True)
    disconnected_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=1, choices=STATUS_TYPE, default='0')

    @classmethod
    def create(cls, east, west):
        connect = cls(east=east, west=west)
        return connect

    def __str__(self):
        return 'East ' + str(self.east.number) + ' -> West ' + str(self.west.number) + ': ' + str(self.connected_date)

    class Meta:
        ordering = ['east']


class ConnectionHistory(models.Model):
    SWITCHING_TYPES = (
        ('C', 'Connected'),
        ('D', 'Disconnected'),
    )

    east = models.ForeignKey(Port, related_name='eastH')
    west = models.ForeignKey(Port, related_name='westH')
    switching_type = models.CharField(max_length=1, choices=SWITCHING_TYPES)
    timestamp = models.DateTimeField(auto_now_add=True)

    @classmethod
    def create(cls, east, west, switching_type):
        connecthistory = cls(east=east, west=west, switching_type=switching_type)
        return connecthistory

    def __str__(self):
        return 'Switching Type:' + str(self.switching_type) + ' East ' + str(self.east.number) + ' -> West ' + str(
            self.west.number) + ': ' + str(self.timestamp)

    class Meta:
        ordering = ['-timestamp']


class Alarm(models.Model):
    ALARM_TYPE = (
        ('S', 'Soft Alarm'),
        ('H', 'Hard Alarm'),
        ('W', 'Warning'),
        ('E', 'Error'),
        ('I', 'Information'),
    )

    SEVERITY_TYPE = (
        ('1', 'Critical'),
        ('2', 'Major'),
        ('3', 'Minor'),
        ('4', 'Information'),
    )

    alarm = models.CharField(max_length=1, choices=ALARM_TYPE)
    timestamp = models.DateTimeField(auto_now_add=True)
    detail = models.CharField(max_length=64)
    severity = models.CharField(max_length=1, choices=SEVERITY_TYPE, default='1')

    @classmethod
    def create(cls, alarm, detail, severity):
        alarms = cls(alarm=alarm, detail=detail, severity=severity)
        return alarms

    def __str__(self):
        return self.alarm

    class Meta:
        ordering = ['-timestamp']


class Operation(models.Model):
    STATUS_TYPES = (
        ('S', 'Success'),
        ('Pr', 'Progressing'),
        ('Pe', 'Pending'),
    )

    robotnumber = models.CharField(max_length=64)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(max_length=2, choices=STATUS_TYPES)
    request = models.CharField(max_length=64)

    def __str__(self):
        return str(self.robotnumber) + str(self.uuid) + str(self.status) + str(self.request)

