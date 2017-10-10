"""Unit test
    python manage.py test webapp.tests
"""
import time
from random import randint
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.management import call_command

east = randint(1, 144)
west = randint(1, 144)


class TestWhitewalker(APITestCase):

    HOST = 'http://localhost:8000'

    def setUp(self):

        call_command('loaddata', './data/Eport_data.json')
        call_command('loaddata', './data/Wport_data.json')

    def test_correct_input_connect(self):
        data = {'east': east, 'west': west, 'action': 'connect'}
        resp = self.client.post('{}/connections/'.format(self.HOST),
                data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)

        resp = self.client.get('{}/checktask/'.format(self.HOST))
        out = resp.json()
        self.assertEqual(out['status'], 'started')

        time.sleep(10)
        out = self.client.get('{}/checktask/'.format(self.HOST)).json()
        self.assertEqual(out['status'], 'success')

    def test_no_east_input_connect(self):
        data = {'west': west, 'action': 'connect'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')
    
    def test_no_west_input_connect(self):
        data = {'east': east, 'action': 'connect'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_correct_input_disconnect(self):
        data = {'east': east, 'west': west, 'action': 'disconnect'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)

    def test_no_east_input_disconnection(self):
        data = {'west': west, 'action': 'disconnect'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')

    def test_no_west_input_disconnection(self):
        data = {'east': east, 'action': 'disconnect'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_correct_input_debug(self):
        data = {'east': east, 'west': west, 'action': 'debug'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)

    def test_no_east_input_debug(self):
        data = {'west': west, 'action': 'debug'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')

    def test_no_west_input_debug(self):
        data = {'east': east, 'action': 'debug'}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_no_action_input_connect(self):
        data = {'east': east, 'west': west}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No action')

    def test_no_input_connection(self):
        data = {}
        resp = self.client.post('{}/connections/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No action')
