from django.urls import path

from .views import BlogListView, BlogCreateView, BlogDetailView, BlogUpdateView

app_name = "blog"
urlpatterns = [
    path('', BlogListView.as_view(), name='list'),
    path('create/', BlogCreateView.as_view(), name='create'),
    path('<slug>/', BlogDetailView.as_view(), name='detail'),
    path('<slug>/update/', BlogUpdateView.as_view(), name='update'),
]

