from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ProjectsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portfolio.projects'
    verbose_name = _('Projects')

    def ready(self):
        try:
            import portfolio.projects.signals  # noqa F401
        except ImportError:
            pass
