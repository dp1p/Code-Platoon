from django.db import models # type: ignore

# Create your models here.
class Student(models.Model):
    #specifying what 'fields' or columns there should be in Django
    name = models.CharField(max_length=100, null=False) #blank is saying: hey, so this cannot be none, but i can accept '' if true
    student_email = models.EmailField(max_length=100, unique=True, null=False)
    personal_email = models.EmailField(max_length=100, unique=True, null=True, blank=True)
    
    # ----WARNING----- 
    #PK and locker_number values are somehow SHARED, so if locker_num is 2, and the PK is on #2, PK will go up bc #2 exists in lockerNum
    locker_number = models.IntegerField(default='1', unique=True, null=False,) #if both null/blank=true, it requires defaultVal
    # ----END WARNING----- 
    locker_combination = models.CharField(max_length=9, null=False, blank=True)
    good_student = models.BooleanField(default=True, null=False, blank=False) #if both null/blank=true, it requires defaultVal


    def __str__(self):
        return f'{self.name} - {self.student_email} - 137'


    def locker_reassignment(self, new_locker_number):
        print(f'{self.name} LOCKER CHANGE!\nOLD: {self.locker_number}\nNEW {new_locker_number}')
        self.locker_number = new_locker_number

    #SWITCHES THE STATUS FROM TRUE TO FALSE
    def student_status(self):
        self.good_student = not self.good_student
        print(f'{self.name} new status change: Good Student? {self.good_student}')
        self.save()