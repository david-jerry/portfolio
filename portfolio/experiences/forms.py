from django.forms import ModelForm

from portfolio.experiences.models import Experiences

class ExperienceForm(ModelForm):
    class Meta:
        model = Experiences
        fields = [
            "title",
            "role",
            "content",
            "started",
            "ended",
            "tags",
        ]
