import json
import asyncio

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.cache import cache
from django.templatetags.static import static
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse#, HttpResponsePermanentRedirect
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from django.shortcuts import render
from django.views.generic import DetailView, CreateView, UpdateView, ListView

from webpush import send_user_notification
from portfolio.experiences.models import Experiences

from portfolio.projects.models import Project
from portfolio.utils.logger import LOGGER

User = get_user_model()


# async def get_projects():
#     projects = await asyncio.to_thread(Project.published.all_projects)
#     project_tags = await asyncio.to_thread(Project.tags.all)
#     return projects, project_tags


class HomeView(ListView):
    model = Project
    template_name = "pages/home.html"
    context_object_name = "objects"
    page_kwarg = 'page'
    paginate_by = 10
    allow_empty = True

    def get_queryset(self):
        # LOGGER.info()
        if cache.get('projects') is not None:
            LOGGER.info(f"Cached Projects: {cache.get('projects')}")
            return cache.get('projects') or []
        else:
            if self.request.user.is_staff:
                b_projects = Project.objects.all()
                LOGGER.info(f"Backend Projects: {b_projects}")
                cache.set('projects', b_projects, timeout=60)
                return b_projects or []
            b_projects = Project.objects.filter(is_published=True)
            LOGGER.info(f"Backend Projects: {b_projects}")
            cache.set('projects', b_projects, timeout=60)
            return b_projects or []



    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        project_tags = cache.get('project_tags')
        LOGGER.info(project_tags)
        exp = cache.get('experiences')
        if project_tags is None:
            cache.set('project_tags', Project.tags.all(), timeout=5 * 60)
            context['tags'] = Project.tags.all()
        else:
            context['tags'] = project_tags

        if exp is None:
            cache.set('experiences', Experiences.objects.all(), timeout=5 * 60)
            context['experiences'] = Experiences.objects.all()
        else:
            context['experiences'] = Experiences.objects.all()

        context['objects'] = self.get_queryset()
        return context

home = HomeView.as_view()


@require_POST
@csrf_exempt
def send_user_push_notification(request):
    try:
        body = request.POST.get('message')
        user = User.objects.get(username=request.POST.get('username'))
        head = 'ADMINISTRATIVE NOTIFICATION'
        payload = {
            'head': head,
            'body': body,
            'icon': static('vendors/images/favicon/favicon.png'),
        }
        send_user_notification(user=user, payload=payload, ttl=1000)
        return JsonResponse(status=200, data={'message':"Notification sent"})
    except TypeError:
        return JsonResponse(status=500, data={'message':"An Error occurred while sending notification"})



@require_POST
@csrf_exempt
def send_notification(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        # LOGGER.info(data)
    except ValueError:
        return HttpResponse(status=400)


    try:
        head = data.pop("head")
        # reg = data.pop("registration_id")
        body = data.pop("body")
        # group = data.pop("group") if data.pop('group') else None
        # LOGGER.info(f"Data: {head}\nbody: {body}\ngroup: {group}")
        # user_id = data['id']
        # user = get_object_or_404(User, id=user_id)
        # if 'head' not in data or 'body' not in data or 'group' not in data:
        #     return JsonResponse(status=400, data={'message':"Invalid request"})


        payload = {
            'head': head,
            'body': body,
            'icon': static('images/favicon/favicon.png'),
            # add url if there is a link to visit from the push notification
            # 'url': f"{request._current_scheme_host}",
        }

        LOGGER.info(payload)

        # if group is None or group == "" and request.user.is_authenticated:
        send_user_notification(user=request.user, payload=payload, ttl=1000)
        # else:
        #     send_group_notification(group_name=group, payload=payload, ttl=1500)
        return JsonResponse(status=200, data={'message':"Notification sent"})
    except TypeError:
        return JsonResponse(status=500, data={'message':"An Error occurred while sending notification"})


@require_http_methods(['GET'])
def service_worker(request):
    sw_path = settings.APPS_DIR / "static/bundles" / "sw.js"
    response = HttpResponse(open(sw_path).read(), content_type='application/javascript')
    return response

@require_http_methods(['GET'])
def service_worker_map(request):
    sw_path = settings.APPS_DIR / "static/bundles" / "sw.js.map"
    response = HttpResponse(open(sw_path).read(), content_type='application/javascript')
    return response



