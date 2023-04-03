from django.db.models import (
    CharField,
    DateField,
    ImageField,
    BooleanField,
    IntegerField,
    SlugField,
)
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from model_utils.models import TimeStampedModel
from tinymce.models import HTMLField
from readtime import of_html
from taggit.managers import TaggableManager

from datetime import date

# Create your models here.
class Blog(TimeStampedModel):
    """blog model

    Args:
        TimeStampedModel (_type_): used to store the created date and modified date
    """

    title = CharField(max_length=500, blank=False, null=False)
    slug = SlugField(blank=True, db_index=True)
    cover_image = ImageField(upload_to="blog/")
    content = HTMLField()

    is_published = BooleanField(default=True)

    # comments = GenericRelation(Comment, related_query_name='projects_comments')

    claps = IntegerField(default=0)
    views = IntegerField(default=0)

    tags = TaggableManager()

    @property
    def get_readtime(self):
        return of_html(self.content)


    def get_prev(self):
        try:
            return self.get_previous_by_created()
        except Blog.DoesNotExist:
            return None

    def get_next(self):
        try:
            return self.get_next_by_created()
        except Blog.DoesNotExist:
            return None

    def __str__(self) -> str:
        return self.title

    def get_absolute_url(self):
        return reverse("blog:detail", kwargs={"slug": self.slug})

    class Meta:
        db_table = 'blog'
        managed = True
        verbose_name = 'Blog'
        verbose_name_plural = 'Blog Posts'
        ordering = ['-modified']
