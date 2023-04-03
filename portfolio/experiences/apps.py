from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class ExperiencesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "portfolio.experiences"
    verbose_name = _('Experiences')

    def ready(self):
        try:
            import portfolio.experiences.signals  # noqa F401
        except ImportError:
            pass
