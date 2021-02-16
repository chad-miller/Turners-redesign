from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html", context={})

def turners(request):
    return redirect('http://www.turners.co.nz')

def mazda(request):
    return redirect('https://www.turners.co.nz/Cars/Used-Cars-for-Sale/mazda/axela/21041033')