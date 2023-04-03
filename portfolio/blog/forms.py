from django.forms import ModelForm

from .models import Blog

class BlogForm(ModelForm):
    """Form to update and create blog post

    Args:
        ModelForm (_type_): model for the form
    """
    class Meta:
        model = Blog
        fields = ['title', 'content', "tags", 'cover_image', 'is_published']
