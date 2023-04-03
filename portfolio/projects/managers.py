from django.db.models import Manager, Count, QuerySet

# class ProjectQueryset(QuerySet):
#     def published(self):
#         return self.filter(is_published=True)

#     def best_projects(self):
#         return self.published().order_by('claps', 'views')

class ProjectManager(Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_published=True)

    def all_projects(self):
        return super().get_queryset()

    def best_projects(self):
        return self.get_queryset().order_by('claps', 'views')

