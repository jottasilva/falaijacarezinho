from django.db import models
from django.utils import timezone

class Post(models.Model):
    feedback_author = models.CharField(max_length=200)
    feedback_text = models.CharField(max_length=800)
    pub_date = models.DateTimeField("date published", default=timezone.now)

    def __str__(self):
        return self.feedback_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - timezone.timedelta(days=1)
