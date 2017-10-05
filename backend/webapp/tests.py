import json
from django.urls import reverse
from django.test import TestCase, Client
from webapp.models import Port
from rest_framework import status
from rest_framework.test import APITestCase

# initialize the APIClient app
client = Client()


class CreateConnectiontest(TestCase):
    """ Test module for inserting a new puppy """

    def test_create_eport(self):

        for i in range(1, 145, 1):
            data = {'direction': 'E', 'number': i}
            response = client.post('/ports/', data, format='json')
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            print(data, response.status_code)

    def test_create_wport(self):

        for i in range(1, 145, 1):
            data = {'direction': 'W', 'number': i}
            response = client.post('/ports/', data, format='json')
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            print(data, response.status_code)

    def test_create_connection(self):

        for i in range(1, 145, 1):
            data = {'east': i, 'west': i, 'action': 'connect'}
            response = client.post('/connections/', data, format='json')
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            print(data, response.status_code)