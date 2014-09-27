from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.core.context_processors import csrf
from django.views.decorators.csrf import ensure_csrf_cookie
import os
import os.path 
import time

@ensure_csrf_cookie

def setName(request):
	if request.method == 'GET':
		return render_to_response('setName.html')

	elif request.method == 'POST':
		name = request.POST['name']
		request.session['username']=name
		return HttpResponse('/recordTime.html');

def recordTime(request):
	if request.method == 'GET':
		if 'username' in request.session.keys():
			return render_to_response('recordTime.html',{'username':request.session['username']}) 
		else:
			return HttpResponseRedirect("/index.html")
	else:
		content = request.POST['content']
		starttime = request.POST['starttime']
		endtime = request.POST['endtime']
		return HttpResponse(content);
		#return render_to_response('hello.html',{'img_url':imageUrl})	
		#return HttpResponse(imageUrl)
# Create your views here.