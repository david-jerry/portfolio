from django.db.models import (
    CASCADE,
    DO_NOTHING,
    # Manager,
    BooleanField,
    CharField,
    DateField,
    EmailField,
    UUIDField,
    DecimalField,
    URLField,
    DateTimeField,
    FileField,
    TextField,
    FloatField,
    ImageField,
    TextField,
    TimeField,
    IntegerField,
    PositiveSmallIntegerField,
    PositiveBigIntegerField,
    ForeignKey,
    ManyToManyField,
    OneToOneField,
    GenericIPAddressField,
    Sum,
    SlugField,
    Count,
    Max,
    Avg,
    Q,
)
from django.contrib.contenttypes.fields import GenericRelation
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.conf import settings

from model_utils.models import TimeStampedModel
from taggit.managers import TaggableManager
from taggit.models import Tag
from tinymce.models import HTMLField
from readtime import of_html

from datetime import date

# from portfolio.comments.models import Comment
# from portfolio.projects.managers import ProjectManager

today = date.today()

# Create your models here.
class Project(TimeStampedModel):
    """store every project handled with details as to what they were and how they were tackled

    Args:
        TimeStampedModel (_type_): used to store the created date and modified date
    """

    title = CharField(max_length=500, blank=False, null=False)
    slug = SlugField(blank=True, db_index=True)
    cover_image = ImageField(upload_to="projects/")
    content = HTMLField()

    preview = URLField(blank=True, null=True)
    github = URLField(blank=True, null=True)

    is_published = BooleanField(default=True)

    # comments = GenericRelation(Comment, related_query_name='projects_comments')

    claps = IntegerField(default=0)
    views = IntegerField(default=0)


    # objects = Manager()
    # published = ProjectManager()
    tags = TaggableManager()

    @property
    def get_readtime(self):
        return of_html(self.content)

    # @property
    # def comments_count(self):
    #     return self.comments.all().count()
    @property
    def similar_projects_count(self):
        tags = self.tags.all()
        return Project.objects.filter(is_published=True, tags__in=tags).count()

    @property
    def similar_projects(self):
        tags = self.tags.all()
        return Project.objects.filter(is_published=True, tags__in=tags).exclude(id=self.id)


    def get_prev(self):
        try:
            return self.get_previous_by_created()
        except Project.DoesNotExist:
            return None

    def get_next(self):
        try:
            return self.get_next_by_created()
        except Project.DoesNotExist:
            return None

    def __str__(self) -> str:
        return self.title

    def get_absolute_url(self):
        return reverse("projects:detail", kwargs={"slug": self.slug})

    class Meta:
        db_table = 'projects'
        managed = True
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ['-created']
