from django.core.exceptions import PermissionDenied
from django.core.cache import cache
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import DetailView, CreateView, UpdateView, ListView
from django.shortcuts import render, redirect, get_object_or_404

from portfolio.experiences.models import Experiences
from portfolio.experiences.forms import ExperienceForm
from portfolio.utils.logger import LOGGER

# Create your views here.
class ExperienceCreateView(LoginRequiredMixin, CreateView):
    model = Experiences
    form_class = ExperienceForm
    template_name = "projects/htmx/create.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Add a new Project"
        context['description'] = "Add a new project that has been completed"
        context['keywords'] = "jeremiah E. David, jerry's projects, dropsride, trustscrow"
        context['author'] = "Jeremiah David"
        context['category'] = "Information Technology"
        context['og_image_alt'] = "jeremiahedavid.space main logo"
        return context

class ExperiencepdateView(LoginRequiredMixin, UpdateView):
    model = Experiences
    form_class = ExperienceForm
    template_name = "projects/htmx/update.html"

    def get_object(self):
        if not self.request.user.is_staff:
            return PermissionDenied()
        else:
            return get_object_or_404(Experiences, slug=self.kwargs['slug'])

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        obj = self.get_object()
        context['title'] = obj.title
        context['object'] = obj
        context['description'] = obj.content[:125]
        context['keywords'] = f"jeremiah E. David, jerry's projects, dropsride, trustscrow, {obj.title}"
        context['author'] = "Jeremiah David"
        context['category'] = "Information Technology"
        context['og_image_alt'] = "jeremiahedavid.space main logo"
        return context


# class ProjectListView(ListView):
#     model = Project
#     template_name = "projects/list.html"
#     context_object_name = "objects"
#     page_kwarg = 'page'
#     paginate_by = 10
#     allow_empty = True
#     queryset = Project.published.all_projects()

#     def get_queryset(self):
#         projects = cache.get('projects')
#         LOGGER.info(projects)
#         LOGGER.info(Project.published.all())
#         LOGGER.info(super().get_queryset())
#         if projects is None:
#             if self.request.user.is_staff:
#                 projects = Project.published.all()
#             projects = super().get_queryset()
#             cache.set('projects', projects, timeout=5 * 60)
#             return projects
#         return projects


#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         project_tags = cache.get('project_tags')
#         LOGGER.info(project_tags)
#         if project_tags is None:
#             cache.set('project_tags', Project.tags.all(), timeout=5 * 60)
#             context['tags'] = Project.tags.all()
#             context['project_count'] = self.get_queryset().count()
#             return context
#         context['tags'] = project_tags
#         context['project_count'] = self.get_queryset().count()
#         return context

#     def get_template_names(self):
#         if self.request.htmx:
#             return 'projects/htmx/list.html'
#         return super().get_template_names()


class ExperienceDetailView(DetailView):
    template_name = 'projects/detail.html'
    model = Experiences
    context_object_name = "object"
    slug_field = "slug"
    slug_url_kwarg = "slug"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        obj = self.get_object()
        context['title'] = obj.title
        context['description'] = obj.content[:125]
        context['keywords'] = f"jeremiah E. David, jerry's projects, dropsride, trustscrow, {obj.title}"
        context['author'] = "Jeremiah David"
        context['category'] = "Information Technology"
        context['og_image_alt'] = "jeremiahedavid.space main logo"
        return context
