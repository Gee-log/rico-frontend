import time
from webapp.views import walk
from random import randint
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.management import call_command

east = randint(1, 144)
west = randint(1, 144)


class TestWhitewalker(APITestCase):

    def setUp(self):

        call_command('loaddata', '.\data\Eport_data.json')
        call_command('loaddata', '.\data\Wport_data.json')

    def test_correct_input_connect(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'west': west, 'action': 'connect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)
        resp_uuid = walk.connect(data)
        out = walk.checkstatus(resp_uuid.text)
        self.assertEqual(out['status'], 'started')
        time.sleep(10)
            # out2 = walk.connect(data)
        out2 = walk.checkstatus(resp_uuid.text)
        self.assertEqual(out2['status'], 'success')

    def test_no_east_input_connect(self):
        url = 'http://localhost:8000/connections/'
        data = {'west': west, 'action': 'connect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')
    
    def test_no_west_input_connect(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'action': 'connect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_correct_input_disconnect(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'west': west, 'action': 'disconnect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)

    def test_no_east_input_disconnection(self):
        url = 'http://localhost:8000/connections/'
        data = {'west': west, 'action': 'disconnect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')

    def test_no_west_input_disconnection(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'action': 'disconnect'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_correct_input_debug(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'west': west, 'action': 'debug'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, data)

    def test_no_east_input_debug(self):
        url = 'http://localhost:8000/connections/'
        data = {'west': west, 'action': 'debug'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No east')

    def test_no_west_input_debug(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'action': 'debug'}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No west')

    def test_no_action_input_connect(self):
        url = 'http://localhost:8000/connections/'
        data = {'east': east, 'west': west}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No action')

    def test_no_input_connection(self):
        url = 'http://localhost:8000/connections/'
        data = {}
        resp = self.client.post(url, data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data, 'No action')
