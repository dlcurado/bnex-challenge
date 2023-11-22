from django.urls import path, include
from . import views
from rest_framework import routers

# Config API route
routerAPI = routers.DefaultRouter()
routerAPI.register(r'products', views.ProductAPI, 'products')

app_name = 'products'

urlpatterns = [
	path('users/register', views.UserRegister.as_view(), name='register'),
	path('users/login', views.UserLogin.as_view(), name='login'),
	path('users/logout', views.UserLogout.as_view(), name='logout'),
	path('users/user', views.UserView.as_view(), name='user'),
  
	path('api/v1/', include(routerAPI.urls)),
    
	path('products/', views.ProductList.as_view(), name='list'),
	path('products/<int:pk>/', views.ProductDetails.as_view(), name='detail'),
	path('products/create/', views.ProductCreate.as_view(), name='create'),
	path('products/update/<int:pk>/', views.ProductUpdate.as_view(), name='update'),
	path('products/delete/<int:pk>/', views.ProductDelete.as_view(), name='delete'),	
]