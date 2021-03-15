from rest_framework import generics
from api import serializers
from django.contrib.auth.models import User
from api.models import Post
from rest_framework import permissions
from .permissions import isOwnerOrReadOnly
from rest_framework.authentication import TokenAuthentication

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
  

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    
class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=serializers.PostSerializer
    authentication_classes=(TokenAuthentication,)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserPost(generics.ListAPIView):
    queryset=Post.objects.all()
    serializer_class=serializers.PostSerializer
    authentication_classes=(TokenAuthentication,)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
          user = self.request.user.id
      
          return Post.objects.filter(owner=user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Post.objects.all()
    serializer_class = serializers.PostSerializer
    authentication_classes=(TokenAuthentication,)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,isOwnerOrReadOnly]


