from django.db.models import (
    CASCADE,
    DO_NOTHING,
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
    PositiveIntegerField,
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

from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.auth import get_user_model

from model_utils.models import TimeStampedModel

from datetime import date
from readtime import of_html

today = date.today()
User = get_user_model()


class Comment(TimeStampedModel):
    user = ForeignKey(User, on_delete=CASCADE, null=True, blank=True)
    name = CharField(max_length=255, null=True, blank=True)
    email = EmailField(null=True, blank=True)
    content = TextField()

    content_type = ForeignKey(ContentType, on_delete=CASCADE)
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    parent = ForeignKey('self', on_delete=CASCADE, null=True, blank=True, related_name='replies')
    edited = BooleanField(default=False)

    claps = IntegerField(default=0)

    reported = BooleanField(default=False)

    def __str__(self):
        return f'Comment by {self.user or self.name} on {self.content_object.title}'

    def is_parent(self):
        return not self.parent

    def children(self):
        return Comment.objects.filter(parent=self)

    def get_children(self):
        return Comment.objects.filter(parent=self).order_by('-created_at').all()

    def get_ancestors(self):
        ancestors = []
        parent = self.parent
        while parent:
            ancestors.insert(0, parent)
            parent = parent.parent
        return ancestors

    class Meta:
        managed = True
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'
        ordering = ['-created']
