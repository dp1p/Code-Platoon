from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
import re

#built in regex validator in django
# validate_name_format = RegexValidator ( 
#     regex = r"^[A-Za-z]+\s[A-Za-z]\.\s[A-Za-z]+$",
#     message = 'Name must be in the format "First Middle Initial. Last"'
# )
def validate_name_format(name):
    pattern = r"^[A-Za-z]+\s[A-Za-z]\.\s[A-Za-z]+$"
    error_message = 'Name must be in the format "First Middle Initial. Last"'
    if not re.match(pattern, name):
    #     return name
    # else:
        raise ValidationError(error_message)







def validate_school_email(student_email):
    error_message = 'Invalid school email format. Please use an email ending with "@school.com".'
    if "@school.com" not in student_email:
        raise ValidationError(error_message)
    # else:
    #     return student_email
    
def validate_locker_num(locker_number):
        
    error_message_max =  "Ensure this value is less than or equal to 200."
    error_message_min =  "Ensure this value is greater than or equal to 1."
    
    #check number is less than 0
    if locker_number <= 0:
        raise ValidationError(error_message_min)
    else:
        pass
    #we check if the locker num is greater than 200
    if locker_number >= 200:
        raise ValidationError(error_message_max)
    # else:
    #     return locker_number

def validate_combination_format(locker_combination):
    error_message =  'Combination must be in the format "12-12-12"'

    #checks locker format
    if locker_combination[2] == '-' and locker_combination[5] == '-':
        return locker_combination
    else:
        raise ValidationError(error_message)
    



    