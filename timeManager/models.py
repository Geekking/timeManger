from django.db import models

class Content(models.Model):
	content = models.CharField(max_length = 512)
	starttime = models.DateTimeField('start')
	endtime = models.DateTimeField('end')
	username = models.CharField(max_length = 512)	
	
	def __unicode__(self):
		return ' '.join([self.username,self.content,self.starttime,self.endtime])
	
	class Admin:
		list_display = ('username','content','starttime','endtime')
		ordering = ('username','starttime','endtime')
		search_fields = ('content','username')

		
