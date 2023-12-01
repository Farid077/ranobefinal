from django.shortcuts import render, redirect
from django.contrib.auth import login as djangoLogin, authenticate, logout as djangoLogout
from django.contrib.auth.decorators import login_required

from home.forms import UserForm

# Create your views here.

def mainpage(request):
    return render(request, 'mainpage.html')

@login_required(login_url='/login')
def userprofile(request):
    return render(request, 'userprofile.html')

def catalogue(request):
    return render(request, 'catalogue.html')

def login(request):
    varNext = request.GET.get('next')
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username = username, password = password)
        if user:
            djangoLogin(request, user)
            if varNext:
                return redirect(varNext)
            return redirect('/')
    return render(request, 'login.html')

def register(request):
    form = UserForm()
    if request.method == 'POST':
        # username = request.POST.get('username')
        # email = request.POST.get('email')
        # password1 = request.POST.get('password1')
        # password2 = request.POST.get('password2')
        # if password1 == password2:
        #     User.objects.create_user(username=username, email=email, password=password1)
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(('login'))

    context = {
        'form':form
    }
    return render(request, 'register.html', context)

def logout(request):
    djangoLogout(request)
    return redirect('/')