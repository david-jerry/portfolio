from django.forms import ModelForm

from .models import Project

class ProjectForm(ModelForm):
    """Form to update and create the projects directly from the template

    Args:
        ModelForm (_type_): model for the form
    """
    class Meta:
        model = Project
        fields = ['title', 'content', "tags", 'cover_image', 'is_published']
