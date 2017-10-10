"""Unit test
    python manage.py test webapp.tests
"""
import time
import sys
from random import randint
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.management import call_command


east = randint(1, 144)
west = randint(1, 144)
historyid = randint(1, 1000)


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

        resp = self.client.get('{}/checktask/'.format(self.HOST))
        out = resp.json()
        self.assertEqual(out['status'], 'started')

        time.sleep(10)
        out = self.client.get('{}/checktask/'.format(self.HOST)).json()
        self.assertEqual(out['status'], 'success')

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

    def test_put_connections(self):
        data = {'detail': 'Method "PUT" not allowed.'}
        resp = self.client.put('{}/connections/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_delete_connections(self):
        data = {'detail': 'Method "DELETE" not allowed.'}
        resp = self.client.delete('{}/connections/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_put_connectionhistorys(self):
        data = {'detail': 'Method "PUT" not allowed.'}
        resp = self.client.put('{}/connectionhistorys/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_delete_connectionhistorys(self):
        data = {'detail': 'Method "DELETE" not allowed.'}
        resp = self.client.delete('{}/connectionhistorys/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_post_operations(self):
        data = {'detail': 'Method "POST" not allowed.'}
        resp = self.client.post('{}/operations/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_put_operations(self):
        data = {'detail': 'Method "PUT" not allowed.'}        
        resp = self.client.put('{}/operations/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_put_alarms(self):
        data = {'detail': 'Method "PUT" not allowed.'}        
        resp = self.client.put('{}/alarms/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_delete_alarms(self):
        data = {'detail': 'Method "DELETE" not allowed.'}        
        resp = self.client.delete('{}/alarms/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_delete_operations(self):
        data = {'detail': 'Method "DELETE" not allowed.'}        
        resp = self.client.delete('{}/operations/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_post_operationhistorys(self):
        data = {'detail': 'Method "POST" not allowed.'}
        resp = self.client.post('{}/operationhistorys/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_put_operationhistorys(self):
        data = {'detail': 'Method "PUT" not allowed.'}        
        resp = self.client.put('{}/operationhistorys/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)
    
    def test_delete_operationhistorys(self):
        data = {'detail': 'Method "DELETE" not allowed.'}        
        resp = self.client.delete('{}/operationhistorys/'.format(self.HOST))
        self.assertEqual(resp.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
        self.assertEqual(resp.data, data)

    def test_clear_database(self):
        data = {'action': 'cleardatabase'}
        resp = self.client.post('{}/connectionhistorys/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        # Check version of python to encode or decode
        if (sys.version_info > (3, 0)):
            self.assertEqual(resp.content.decode("utf-8"), 'Clear database success !')
        else:
            self.assertEqual(resp.content.encode("utf-8"), 'Clear database success !')            
    
    def test_cancel_connection(self):
        data = {'id': historyid, 'action': 'canceled'}
        out = {'historyid': historyid, 'action': 'canceled'}        
        resp = self.client.post('{}/connectionhistorys/'.format(self.HOST), data, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.json(), out)                   
        