from django.db import models

# Create your models here.

# Create your models here.
# models.Model tell Django this is a Model that should be reflected on our database
class Pokemon(models.Model):
    name = models.CharField(max_length=255) # CharField is a character field and has a default max length of 255 characters
    level = models.IntegerField(default=1)  # IntegerField will allow only solid numerical values as input