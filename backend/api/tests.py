from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase

class AccountTests(APITestCase):
  def test_create_account(self):
    """
    Teste de criação de usuário
    """
    url = reverse('products:register')
    data = {
      "email":"react_app@gmail.com",
      "username":"react_app",
      "password":"4gWBO(&x'q!i0J+P~"
    }
    response = self.client.post(url, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
  
  def test_login(self):
    """
    Teste de login
    """
    url_create = reverse('products:register')
    data = {
      "email":"react_app@gmail.com",
      "username":"react_app",
      "password":"4gWBO(&x'q!i0J+P~"
    }
    response = self.client.post(url_create, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    url_login = reverse('products:login')
    data = {
      "email":"react_app@gmail.com",
      "password":"4gWBO(&x'q!i0J+P~"
    }
    response = self.client.post(url_login, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_logout(self):
    """
    Teste de logout
    """
    url_create = reverse('products:register')
    data = {
      "email":"react_app@gmail.com",
      "username":"react_app",
      "password":"4gWBO(&x'q!i0J+P~"
    }
    response = self.client.post(url_create, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    url_logout = reverse('products:logout')
    data = {}
    response = self.client.post(url_logout, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)



    

class PorductAPITests(APITestCase):
  def test_create_product(self):
    """
    Teste de criação de produto
    """
    url_create = reverse('products:create')
    data = {
      "dsfdsf":"react_app@gmail.com",
      "sdfdsf":20,
      "sdfdsf":20
    }
    response = self.client.post(url_create, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  # 'list'
	# 'detail'
	# 'create'
	# 'update'
	# 'delete'