from django.urls import path

from .views import ExperienceCreateView, ExperienceDetailView, ExperiencepdateView #, ProjectListView

app_name = "experiences"
urlpatterns = [
    # path('', ProjectListView.as_view(), name='list'),
    path('create/', ExperienceCreateView.as_view(), name='create'),
    path('<slug>/', ExperienceDetailView.as_view(), name='detail'),
    path('<slug>/update/', ExperiencepdateView.as_view(), name='update'),
]

