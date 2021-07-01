import numpy as np
import pickle
from django.shortcuts import render


# Create your views here.
def home(request):
  return render(request=request, template_name='app/index.html')

def predict(request):
  model = pickle.load(open('/home/virusx/Documents/HDRA/app/model.pkl', 'rb'))
  
  if request.method == "POST":
    int_features = []
    for x in request.POST:
      if  x != 'csrfmiddlewaretoken':
        int_features.append(int(request.POST[x]))

    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]
    print(output)
    if output == 1:
      return render(request=request, template_name='app/index.html', 
      context={
        "prediction_text": 'CHD risk is there', 
        "color":"red"
      })
    elif output == 0:
      return render(request=request, template_name='app/index.html', 
      context={
        "prediction_text": 'CHD risk is not there', 
        "color":"green"
      })
  return render(request=request, template_name='app/index.html')
