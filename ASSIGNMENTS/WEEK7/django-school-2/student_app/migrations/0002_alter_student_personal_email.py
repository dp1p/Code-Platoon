# Generated by Django 5.0.7 on 2024-07-30 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='personal_email',
            field=models.EmailField(max_length=100, null=True),
        ),
    ]
