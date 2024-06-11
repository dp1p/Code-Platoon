class Student:
    def __init__(self, name, age=13, grade='12th' ): # = sign puts the arguments as a default varia
        self._name = name
        self._age = age
        self._grade = grade
    
    
    def __str__(self) -> str:   #we will use get_name instead of name because we are getting the new attribute from the setter
        return f"{self.get_name}, Age: {self.get_age}, Grade: {self.get_grade}" #we will not be using self._name, we will be using self.get_name
    
    def advance(self):
        return f"{self.get_name} has advanced to {self.get_grade + 1} grade"
    
    def study(self, major):
        return f"{self.get_name} is studying {major}."
    
    
    #getting the name attribute
    @property #this will be the getter, we will return this property and use this instead of self._name simply for naming conventions
    def get_name(self): #it may seem like alot of code noise for smaller projects, however, this will be easier to manipulate it when it comes to the bigger application,
        return self._name  
    #setting the name attributes : setter
    @get_name.setter
    def set_name(self, new_name):
        if isinstance(new_name, str):
            self._name = new_name
        else:
            print("Name must be a string.")



    #getting the age attribute
    @property
    def get_age(self):
        return self._age
    
    @get_age.setter
    def set_age(self, new_age):
        if isinstance(new_age, int) and 11 < new_age < 18: 
                self._age = new_age
        else:
            print("Invalid.") 

    @property
    def get_grade(self):
        return self._grade
    
    @get_grade.setter
    def set_grade(self, new_grade):
        grade_arr = ['9th', '10th', '11th', '12th'] #we will create an array of the grade strings
        if isinstance(new_grade, str) and new_grade in grade_arr: #checks if the new_grade str is true in the grade_arr
            self._grade = new_grade #we will update the new_grade str and return it to get_grade func
        else:
            return self.get_grade #we will ignore any updates and simply return no modification to the grade



    

student = Student("Alice") #creating an instance of student
print(student)
# student.set_name = 234 #modifying the data by using the set setter, it should return "name must be a string"
# student.set_age = 10
# print(student.set_age)
student.set_grade = "12th"
print(student.set_grade)

# student.get_name == "Alice"
# student.get_age == 13
# student.get_grade == "12th"

print(student)