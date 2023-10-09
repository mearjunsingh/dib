from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.index, name='login'),
    path('signup/', views.signup, name='signup'),
    path('about/', views.about, name='about'),
    path('faqs/', views.faq, name='faqs'),
    path('hotline/', views.hotline, name='hotline'),
    path('resources/', views.resources, name='resources'),
    path('diabetes-prediction/', views.diabetes_prediction, name='diabetes-prediction'),
    path('result/', views.result, name='result'),

    path('logout/', views.logout, name='logout')
]