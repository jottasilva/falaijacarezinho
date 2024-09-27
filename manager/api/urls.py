from django.urls import path
from . import views
from .views import create_post, post_list
urlpatterns = [
    path('posts/', create_post, name='create_post'),    # URL para criar um post
    path('posts/list/', post_list, name='post_list'),   # URL para listar os posts
]