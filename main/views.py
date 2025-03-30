from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def home(request): # temp
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

