# Generated by Django 5.0.7 on 2024-07-23 20:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0007_alter_student_good_student_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='locker_combination',
            field=models.CharField(default='12-12-12', max_length=20),
        ),
        migrations.AlterField(
            model_name='student',
            name='locker_number',
            field=models.IntegerField(default=110, unique=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(max_length=100, validators=[django.core.validators.RegexValidator(message='Name must be in the format "First Middle Initial. Last"', regex='^[A-Za-z]+\\s[A-Za-z]\\.\\s[A-Za-z]+$')]),
        ),
        migrations.AlterField(
            model_name='student',
            name='student_email',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
