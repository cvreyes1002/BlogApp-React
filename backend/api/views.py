from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RegisterSerializer, UserSerializer

class RegisterView(APIView):
    permission_classes = [AllowAny] # Anyone can reach this endpoint to sign up

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully!"}, 
                status=status.HTTP_201_CREATED
            )
        # Returns specific validation errors (e.g., "This email is already in use")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]  # Adjust this based on your authentication needs

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


# from django.shortcuts import render
# from users.models import CustomUser
# from rest_framework import generics
# # from .serializers import UserSerializer, PostSerializer
# from .serializers import UserSerializer
# from rest_framework.permissions import IsAuthenticated, AllowAny

# # Create your views here.
# class CreateUserView(generics.CreateAPIView):
#     # Get all data first from DB to make sure we do not create data that already exists.
#     queryset = CustomUser.objects.all()
#     # Tells View what data we need to accept to create a new user
#     serializer_class = UserSerializer
#     # Specify who can call this class, even if not authenticated
#     permission_classes = [AllowAny]

