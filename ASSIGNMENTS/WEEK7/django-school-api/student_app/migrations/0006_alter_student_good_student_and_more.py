# Generated by Django 5.0.7 on 2024-07-23 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0005_alter_student_good_student_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='good_student',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='locker_combination',
            field=models.CharField(default='0000', max_length=20),
        ),
        migrations.AlterField(
            model_name='student',
            name='locker_number',
            field=models.IntegerField(default=111),
        ),
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(default='John Doe', max_length=30),
        ),
        migrations.AlterField(
            model_name='student',
            name='personal_email',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='student_email',
            field=models.CharField(default='default@example.com', max_length=100),
        ),
    ]
