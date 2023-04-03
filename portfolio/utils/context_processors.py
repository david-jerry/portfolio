from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.utils.functional import SimpleLazyObject


def context_settings(request):
    webpush_settings = getattr(settings, "WEBPUSH_SETTINGS", {})
    vapid_key = webpush_settings.get("VAPID_PUBLIC_KEY")

    return {
        "settings":settings,
        'APPLICATION_SERVER_KEY': vapid_key,
        'site': SimpleLazyObject(lambda: get_current_site(request)) if not settings.PRODUCTION else "localhost:8000",
    }
