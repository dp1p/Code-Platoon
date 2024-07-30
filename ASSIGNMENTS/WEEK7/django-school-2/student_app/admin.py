# student_app/admin.py
from django.contrib import admin
# Explecit import of Pokemon Model
from .models import Student

# Register your models here.
admin.site.register([Student])
# Register your models here.
