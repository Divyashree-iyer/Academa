from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat, name='chat'),
    path('approve_plan/', views.approve_plan, name='approve_plan'),
    path('get_user_plan/', views.get_user_plan, name='get_user_plan'),
]