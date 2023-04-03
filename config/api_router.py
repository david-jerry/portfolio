from django.conf import settings
from django.urls import include, path

from rest_framework.routers import DefaultRouter, SimpleRouter
from dj_rest_auth.registration.views import (
    SocialAccountListView, SocialAccountDisconnectView
)


from portfolio.projects.api.views import ProjectViewset
from portfolio.users.api.views import UserViewSet
from portfolio.users.views import FacebookLogin, GoogleLogin, facebook_callback, google_callback


if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register('projects', ProjectViewset)


app_name = "api"
urlpatterns = router.urls
urlpatterns += [
    path("auth/", include("dj_rest_auth.urls")),
    path('auth/socialaccounts/', SocialAccountListView.as_view(), name='social_account_list'),
    path('auth/socialaccounts/<pk>/disconnect/', SocialAccountDisconnectView.as_view(), name='social_account_disconnect'),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    path("auth/facebook/login/", FacebookLogin.as_view(), name="fb_login"),
    path("auth/google/login/", GoogleLogin.as_view(), name="google_login"),
]




