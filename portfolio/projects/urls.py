from django.urls import path

from .views import ProjectCreateView, ProjectUpdateView, ProjectDetailView #, ProjectListView

app_name = "projects"
urlpatterns = [
    # path('', ProjectListView.as_view(), name='list'),
    path('create/', ProjectCreateView.as_view(), name='create'),
    path('<slug>/', ProjectDetailView.as_view(), name='detail'),
    path('<slug>/update/', ProjectUpdateView.as_view(), name='update'),
]

