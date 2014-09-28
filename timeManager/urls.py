from django.conf.urls import patterns, include, url
from django.conf.urls import patterns, include, url
from django.contrib import admin
from timeManager.views import setName,recordTime,getHistory
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'timeManager.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'index.html',setName),
	url(r'recordTime.html',recordTime),
	url(r'getHistory.html',getHistory),
)+ static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

