from django.db import models
from django.core import validators
from .validators import validate_name_format, validate_school_email, validate_combination_format, validate_locker_num

# Create your models here.
#MAKE UR MIGRATIONS TO UPDATE TO MODEL
#MAKE SURE YOUR SETTINGS ARE UPDATED
#UNDER INSTALLED APPS MAKE SURE `student_app` IS THERE
#UNDER DATABASE MAKE SURE `school_db` IS THERE
class Student(models.Model):
    # name - string - cannot be null
    name = models.CharField(max_length=100, null = False, blank = False, validators=[validate_name_format])  # it is NOT NULL by default
    
    # student_email - string - cannot be null
    student_email = models.EmailField(default='', null = False, blank = False, unique = True, validators=[validate_school_email])
    
    # personal_email - string - can be BLANK
    personal_email = models.EmailField(default='', null = False, blank = False, unique = True)  # it can be blank, aka NULL
    
    # locker_number - int - cannot be null
    locker_number = models.IntegerField(default = 110, null = False, blank = False, unique=True, validators=[validate_locker_num])
    
    # locker_combination - string - cannot be null
    locker_combination = models.CharField(default = '12-12-12', max_length=255, null = False, blank = False, validators=[validate_combination_format])
    
    # good_student - boolean - cannot be null
    good_student = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} has been added."
    
    def locker_num(self):
        return f"{self.name} Locker Number: {self.locker_number} "
    
    def locker_combo(self):
        return f"{self.name} Locker Combo: {self.locker_combination}"