import urllib.parse

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView, RedirectView, UpdateView

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

User = get_user_model()

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
    client_class = OAuth2Client

    @property
    def callback_url(self):
        # use the same callback url as defined in your GitHub app, this url
        # must be absolute:
        return self.request.build_absolute_uri(reverse("facebook_callback"))

    # callback_url='http://localhost:8000/api/auth/facebook/login/callback/' if not settings.PRODUCTION else "https://dropsride.com/api/auth/facebook/login/callback/"


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client

    @property
    def callback_url(self):
        # use the same callback url as defined in your GitHub app, this url
        # must be absolute:
        return self.request.build_absolute_uri(reverse("google_callback"))

    # callback_url = 'http://localhost:8000/api/auth/google/login/callback/' if not settings.PRODUCTION else "https://dropsride.com/api/auth/google/login/callback/"


def google_callback(request):
    params = urllib.parse.urlencode(request.GET)
    origin = (
        "http://localhost:8000/"
        if not settings.PRODUCTION
        else "https://dropsride.com/"
    )
    return redirect(f"{origin}api/auth/google/login/callback/?{params}")


def facebook_callback(request):
    params = urllib.parse.urlencode(request.GET)
    origin = (
        "http://localhost:8000/"
        if not settings.PRODUCTION
        else "https://dropsride.com/"
    )
    return redirect(f"{origin}api/auth/facebook/login/callback/?{params}")


class UserDetailView(LoginRequiredMixin, DetailView):
    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):
    model = User
    fields = ["name"]
    success_message = _("Information successfully updated")

    def get_success_url(self):
        assert (
            self.request.user.is_authenticated
        )  # for mypy to know that the user is authenticated
        return self.request.user.get_absolute_url()

    def get_object(self):
        return self.request.user


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()
