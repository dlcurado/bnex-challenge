#from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product

from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

class ProductList(ListView):
  model = Product
  queryset = Product.objects.all()

class ProductDetails(DetailView):
  queryset = Product.objects.all()

class ProductCreate(CreateView):
  model = Product
  fields = '__all__'
  success_url = reverse_lazy('products:list')

class ProductUpdate(UpdateView):
  model = Product
  fields = '__all__'
  success_url = reverse_lazy('products:list')

class ProductDelete(DeleteView):
  queryset = Product.objects.all()
  success_url = reverse_lazy('products:list')

# Create your views here.
class ProductAPI(viewsets.ModelViewSet):
  serializer_class = ProductSerializer
  queryset = Product.objects.all()