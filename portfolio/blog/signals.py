from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver

from datetime import date

from portfolio.utils.unique_generators import unique_slug_generator

from .models import Blog

today = date.today()
User = get_user_model()

@receiver(post_save, sender=Blog)
def create_slug(sender, instance, created, **kwargs):
    from django.core.cache import cache
    blogs = Blog.objects.filter(is_published=True)
    cache.set('blog', blogs, timeout=5 * 60)
    if created:
        # only works if you have a field called title to create a slug from and a slug field to attach the slug into
        instance.slug = unique_slug_generator(instance)
        instance.save(update_fields=['slug'])

