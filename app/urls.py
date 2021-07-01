from django.urls import path
from .views import home, predict

urlpatterns = [
  path('', view=home, name='home'),
  path('predict/', view=predict, name='predict')
]
