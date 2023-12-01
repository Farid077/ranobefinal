from django.urls import path
from home.views import mainpage, userprofile, catalogue, login, register, logout

urlpatterns = [
    path('', mainpage, name='mainpage'),
    path('userprofile/', userprofile, name='userprofile'),
    path('catalogue/', catalogue, name='catalogue'),
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'),
    
]