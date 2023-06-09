# Generated by Django 4.1 on 2023-04-02 05:06

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields
import taggit.managers
import tinymce.models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("taggit", "0005_auto_20220424_2025"),
    ]

    operations = [
        migrations.CreateModel(
            name="Experiences",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                ("title", models.CharField(max_length=500)),
                ("role", models.CharField(max_length=500)),
                ("slug", models.SlugField(blank=True)),
                ("content", tinymce.models.HTMLField()),
                ("started", models.DateField()),
                ("ended", models.DateField()),
                (
                    "tags",
                    taggit.managers.TaggableManager(
                        help_text="A comma-separated list of tags.",
                        through="taggit.TaggedItem",
                        to="taggit.Tag",
                        verbose_name="Tags",
                    ),
                ),
            ],
            options={
                "verbose_name": "Experience",
                "verbose_name_plural": "Experiences",
                "db_table": "experiences",
                "ordering": ["-started"],
                "managed": True,
            },
        ),
    ]
