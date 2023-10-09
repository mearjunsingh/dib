from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Prediction(models.Model):
  pg = models.IntegerField()
  gc = models.IntegerField()
  bp = models.IntegerField()
  st = models.IntegerField()
  ins = models.IntegerField()
  bmi = models.IntegerField()
  dpf = models.IntegerField()
  age = models.IntegerField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.user
