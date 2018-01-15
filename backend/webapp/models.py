import uuid
from django.conf import settings
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Port(models.Model):
    DIRECTION_TYPE = (
        ('E', 'East'),
        ('W', 'West'),
    )

    direction = models.CharField(max_length=1, choices=DIRECTION_TYPE)
    number = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(144)])
    note = models.CharField(max_length=64, default=None, blank=True, null=True)
    connection_counter = models.IntegerField(default=0)

    def __str__(self):
        return self.direction + str(self.number)


class Connection(models.Model):

    east = models.ForeignKey(Port, related_name='east')
    west = models.ForeignKey(Port, related_name='west')
    connected_date = models.DateTimeField(auto_now_add=True)
    disconnected_date = models.DateTimeField(default=None, blank=True, null=True)
    status = models.CharField(max_length=64, default=None, blank=True, null=True)

    @classmethod
    def create(cls, east, west, status):
        connect = cls(east=east, west=west, status=status)
        return connect

    def __str__(self):
        return 'East ' + str(self.east.number) + ' -> ' + 'West ' + str(self.west.number) + ' Status : ' + str(self.status)

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
    status = models.CharField(max_length=256, default=None, blank=True, null=True)
    username = models.CharField(max_length=256, default=None, blank=True, null=True)

    @classmethod
    def create(cls, east, west, switching_type, status, username):
        connecthistory = cls(east=east, west=west, switching_type=switching_type, status=status, username=username)
        return connecthistory

    def __str__(self):
        return 'East ' + str(self.east.number) + ' -> ' + 'West ' + str(self.west.number)

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
    detail = models.CharField(max_length=256)
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

    robotnumber = models.CharField(primary_key=True, max_length=1)
    uuid = models.UUIDField(default=uuid.uuid4, editable=True)
    status = models.CharField(max_length=64)
    request = models.CharField(max_length=256)
    response = models.CharField(max_length=256, default=None, blank=True, null=True)

    @classmethod
    def create(cls, robotnumber, uuid, status, request, response):
        operations = cls(robotnumber=robotnumber, uuid=uuid, status=status, request=request, response=response)
        return operations

    def __str__(self):
        return str(self.uuid)


class OperationHistory(models.Model):

    uuid = models.UUIDField(primary_key=True, editable=False)
    robotnumber = models.CharField(max_length=1)
    created_time = models.DateTimeField(auto_now_add=True)
    finished_time = models.DateTimeField(default=None, blank=True, null=True)
    status = models.CharField(max_length=64)
    request = models.CharField(max_length=256)
    response = models.CharField(max_length=256, default=None, blank=True, null=True)

    def __str__(self):
        return str(self.uuid)
        # return str(self.uuid) + ' c:' + str(self.created_time)
        # + ' f:' + str(self.finished_time) + ' s:' + self.status/
        # + ' req:' + str(self.request) + ' resp:' + str(self.response)/

    class Meta:
        ordering = ['-created_time']


class Role(models.Model):
    USER_ROLE = (
        ('Admin', 'Admin'),
        ('Manager', 'Manager'),
        ('Staff', 'Staff'),
        ('User', 'User'),
    )

    USER_STATUS = (
        ('Offline', 'Offline'),
        ('Online', 'Online'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=7, choices=USER_ROLE, default='Staff')
    status = models.CharField(max_length=7, choices=USER_STATUS, default='Offline')

    def __str__(self):
        return str(self.user) + ' (' + str(self.role) + ')'


class Robot(models.Model):
    
    robot_number = models.IntegerField(unique=True)

    def __str__(self):
        return 'Robot number: ' + str(self.robot_number)


class Taskcancelation(models.Model):
    
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    mode = models.CharField(max_length=64)
    robot = models.CharField(max_length=64)
    continue_mode = models.CharField(max_length=64)
    response = models.CharField(max_length=256)

    @classmethod
    def create(cls, uuid, mode, robot, continue_mode, response):
        taskcancelation = cls(uuid=uuid, mode=mode, robot=robot, continue_mode=continue_mode, response=response)
        return taskcancelation

    def __str__(self):
        return self.uuid

    class Meta:
        ordering = ['-id']


class OperationSequence(models.Model):
    
    sequence_number = models.CharField(max_length=64, default=None, blank=True, null=True)
    total_sequence = models.CharField(max_length=64, default=None, blank=True, null=True)

    @classmethod
    def create(cls, sequence_number, total_sequence):
        operationsequence = cls(sequence_number=sequence_number, total_sequence=total_sequence)
        return operationsequence

    def __str__(self):
        return self.sequence_number

# This code is triggered whenever a new user has been created and saved to the database
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
