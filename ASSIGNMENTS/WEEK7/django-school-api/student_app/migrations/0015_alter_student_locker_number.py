# Generated by Django 5.0.7 on 2024-07-24 04:02

import student_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0014_alter_student_locker_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='locker_number',
            field=models.IntegerField(default=110, unique=True, validators=[student_app.validators.validate_locker_num]),
        ),
    ]
