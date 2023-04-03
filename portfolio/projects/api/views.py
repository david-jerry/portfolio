from portfolio.projects.models import Project
from portfolio.projects.api.serializers import ProjectSerializer
from portfolio.utils.logger import LOGGER

from django.http import JsonResponse
from django.core.cache import cache

# from config.celery_tasks import optimize_image
# from celery.result import AsyncResult

from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.decorators import action
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, CreateModelMixin
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.authentication import TokenAuthentication, SessionAuthentication


class ProjectViewset(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin, DestroyModelMixin, GenericViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.filter(is_published=True)
    lookup_field = "slug"
    permission_classes = [AllowAny]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self, *args, **kwargs):
        if cache.get('projects') is not None:
            LOGGER.info(f"Cached Projects: {cache.get('projects')}")
            return cache.get('projects')
        else:
            if self.request.user.is_staff:
                b_projects = Project.objects.all()
                LOGGER.info(f"Backend Projects: {b_projects}")
                cache.set('projects', b_projects, timeout=60)
                return b_projects
            b_projects = Project.objects.filter(is_published=True)
            LOGGER.info(f"Backend Projects: {b_projects}")
            cache.set('projects', b_projects, timeout=60)
            return b_projects

    # def create(self, request, *args, **kwargs):
    #     # data = request.data
    #     # title = data['title']
    #     # content = data['content']
    #     # image = data['cover_image']
    #     # is_published = True if data['is_published'] == 'on' else False
    #     # tags = [data['tags']]
    #     # LOGGER.info(f"Tags: {tags}")
    #     # LOGGER.info(image)
    #     serializer = ProjectSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     data = serializer.validated_data

    #     title = data['title']
    #     content = data['content']
    #     image = data['cover_image']
    #     LOGGER.info(data['is_published'])
    #     LOGGER.info(request.data['tags'])
    #     is_published = data['is_published']
    #     if ',' in request.data['tags']:
    #         tags = request.data['tags'].split(',')
    #     else:
    #         tags = [f'{request.data["tags"]}']
    #     # tags = data['tags']
    #     LOGGER.info(f"Tags: {tags}")
    #     LOGGER.info(f"Serialized Tags: {data['tags']}")
    #     LOGGER.info(image)

    #     # Save the uploaded file to S3 or another storage service
    #     cover_image = image

    #     obj = Project.objects.create(
    #         title=title,
    #         content=content,
    #         cover_image=image,
    #         is_published=is_published,
    #         tags=tags,
    #     )
    #     # LOGGER.info(obj.title)
    #     # obj_key = f"pro_{title.replace(' ', '_')}"
    #     # # img_key = title.replace(' ', '_')
    #     # cache.set(obj_key, obj)
    #     # LOGGER.info(cache.get(obj_key).cover_image.path)
    #     # task = optimize_image.delay(obj.cover_image.path, name=title, h=None, w=None, rsize=False)
    #     serializer = ProjectSerializer(obj, context={'request':request})
    #     return Response(status=status.HTTP_200_OK, data={"object":obj, "cache_key":obj_key, "task_id":task.id, "message":"Processing the upload"})

    # @action(detail=False, methods=['GET', 'POST'], url_path="check-processing/(?P<task_id>[^/.]+)/(?P<cache_key>[^/.]+)/")
    # def check_processing(self, request, *args, **kwargs):
    #     task_id = kwargs['task_id']
    #     cache_key = kwargs['cache_key']
    #     result = AsyncResult(task_id)
    #     post = cache.get(cache_key)
    #     image = cache.get(post.title.replace(' ', "_"))
    #     if result.ready():
    #         post.cover_image = image
    #         data = post.save()
    #         serializer = ProjectSerializer(data=data, context={'request':request})
    #         return Response(status=status.HTTP_201_CREATED, data={'object':serializer.data, 'message':"You have successfully added a new project"})
    #     return Response(status=status.HTTP_200_OK, data={"cache_key":cache_key, "task_id":task_id.id, "message":"Processing the upload"})
