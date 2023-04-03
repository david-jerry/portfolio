from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver

from datetime import date

from portfolio.utils.unique_generators import unique_slug_generator

from .models import Experiences

today = date.today()
User = get_user_model()

@receiver(post_save, sender=Experiences)
def create_slug(sender, instance, created, **kwargs):
    if created:
        # only works if you have a field called title to create a slug from and a slug field to attach the slug into
        instance.slug = unique_slug_generator(instance)
        instance.save(update_fields=['slug'])

