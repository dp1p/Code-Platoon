# Generated by Django 5.0.7 on 2024-07-25 20:05

import student_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0018_alter_student_student_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(max_length=100, validators=[student_app.validators.validate_name_format]),
        ),
    ]