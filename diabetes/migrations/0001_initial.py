# Generated by Django 4.2.6 on 2023-10-09 03:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Prediction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pg', models.IntegerField()),
                ('gc', models.IntegerField()),
                ('bp', models.IntegerField()),
                ('st', models.IntegerField()),
                ('ins', models.IntegerField()),
                ('bmi', models.IntegerField()),
                ('dpf', models.IntegerField()),
                ('age', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
