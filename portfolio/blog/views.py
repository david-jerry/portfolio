from django.core.exceptions import PermissionDenied
from django.core.cache import cache
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import DetailView, CreateView, UpdateView, ListView
from django.shortcuts import render, redirect, get_object_or_404

from portfolio.blog.models import Blog
from portfolio.blog.forms import BlogForm
from portfolio.utils.logger import LOGGER

# Create your views here.
class BlogCreateView(LoginRequiredMixin, CreateView):
    model = Blog
    form_class = BlogForm
    template_name = "blog/htmx/create.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Add a new POst"
        context['description'] = "Add a new blog post that has been completed"
        context['keywords'] = "jeremiah E. David, jerry's blog, dropsride, trustscrow"
        context['author'] = "Jeremiah David"
        context['category'] = "Information Technology"
        context['og_image_alt'] = "jeremiahedavid.space main logo"
        return context

class BlogUpdateView(LoginRequiredMixin, UpdateView):
    model = Blog
    form_class = BlogForm
    template_name = "blog/htmx/update.html"

    def get_object(self):
        if not self.request.user.is_staff:
            return PermissionDenied()
        else:
            return get_object_or_404(Blog, slug=self.kwargs['slug'])

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


class BlogListView(ListView):
    model = Blog
    template_name = "blog/list.html"
    context_object_name = "objects"
    page_kwarg = 'page'
    paginate_by = 10
    allow_empty = True

    def get_queryset(self):
        if cache.get('blog') is None:
            if self.request.user.is_staff:
                projects = Blog.objects.all()
                cache.set('blog', projects, timeout=5 * 60)
                return projects or []
            projects = Blog.objects.filter(is_published=True)
            cache.set('blog', projects, timeout=5 * 60)
            return projects or []
        else:
            return cache.get('blog') or []

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        blog_tags = cache.get('blog_tags')
        LOGGER.info(blog_tags)
        context['objects'] = self.get_queryset()
        context['title'] = "Amazing write ups and How To tutorials"
        context['description'] = "Real world experience working as a software engineer with helpful tips and how-to tutorials."
        context['keywords'] = f"jeremiah E. David, jerry's projects, dropsride, trustscrow, Amazing write ups and How To tutorials, Jerry's blog, Jerry's writeup"
        context['author'] = "Jeremiah David"
        context['category'] = "Information Technology"
        context['og_image_alt'] = "jeremiahedavid.space main logo"
        if blog_tags is None:
            cache.set('blog_tags', Blog.tags.all(), timeout=5 * 60)
            context['tags'] = Blog.tags.all()
        else:
            context['tags'] = blog_tags
        return context

    # def get_template_names(self):
    #     if self.request.htmx:
    #         return 'blog/htmx/list.html'
    #     return super().get_template_names()


class BlogDetailView(DetailView):
    template_name = 'blog/detail.html'
    model = Blog
    context_object_name = "object"
    slug_field = "slug"
    slug_url_kwarg = "slug"

    def get_queryset(self, *args, **kwargs):
        if not self.request.user.is_staff:
            return Blog.objects.all()
        else:
            return Blog.objects.filter(is_published=True)

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
