from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from api import views
from . views import ProductAPI, ProductList, ProductDetails, ProductCreate, ProductUpdate, ProductDelete

# Config API route
routerAPI = routers.DefaultRouter()
routerAPI.register(r'products', views.ProductAPI, 'products')


app_name = 'products'

urlpatterns = [
    path('api/v1/', include(routerAPI.urls)),
    
    path('', ProductList.as_view(), name='list'),
    path('<int:pk>/', ProductDetails.as_view(), name='detail'),
    path('create/', ProductCreate.as_view(), name='create'),
    path('update/<int:pk>/', ProductUpdate.as_view(), name='update'),
    path('delete/<int:pk>/', ProductDelete.as_view(), name='delete'),

    path('docs/', include_docs_urls(title='Products API'))
]


# This code auto generate GET, POST, PUT, DELETE