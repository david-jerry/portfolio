from rest_framework import serializers

from taggit.models import Tag
from taggit.serializers import TagListSerializerField, TaggitSerializer

from portfolio.projects.models import Project

class TagSerializer(TaggitSerializer, serializers.ModelSerializer):
    # tags = TagListSerializerField()

    class Meta:
        model = Tag
        fields = "__all__"



class ProjectSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Project
        fields = [
            "title",
            "slug",
            "tags",
            "cover_image",
            "content",
            "is_published",
            "claps",
            "views",
            "url"
        ]
        read_only_fields = [
            "slug"
        ]
        extra_kwargs = {
            'url':{'view_name':'api:project-detail', 'lookup_field':'slug'}
        }
