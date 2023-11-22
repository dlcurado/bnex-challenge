from django.contrib.auth import login, logout
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView


from rest_framework import permissions, status, viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from .serializers import ProductSerializer
from .validations import custom_validation, validate_email, validate_password

from .models import Product

######## API Authorization - User Management
class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)


########## Products CBV View
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


######## Products API View
class ProductAPI(viewsets.ModelViewSet):
  #permission_classes = [IsAuthenticated]
  serializer_class = ProductSerializer
  queryset = Product.objects.all()