#Creating a class of our own
#the word "instance" is only to objects, because these Object / instance variables will ONLY be in objects
#instance variable - only one occurance


#self is a reference to the instance (variables) itself
class Dog: #imagine dictionary having functions or having a specfic purpose
    #class attribute
    all_dogs = [] #we intializing an array to add to the whole CLASS. known as class attribute
    id_Counter = 1

    def __init__(self, name, breed, color, sound, age):
        #self's are for instance attributes                    aka instance variables
        self.name = name 
        self.breed = breed
        self.color = color
        self.sound = sound
        self.id = Dog.id_Counter 
        self._age = age
        print("new dog created")
        
        #add newly created dog instance to all_students
        Dog.all_dogs.append(self)
        Dog.id_Counter += 1

        # @property
        # def get_age(self):
        #     return self._age
       
        # @get_age.setter
        # def new_age(self, new_age):
        #     if type(new_age) == int:
        #         self._age = new_age

        

    def __str__(self) -> str: #dunder str instance method allows a reader friendly version of the class object when print()
        return f"{self.name} is a {self.breed}, with fur color of {self.color}, {self.sound}"
    
    def __repr__(self) -> str:
        return f"{self.name} | {self.breed} | {self.color} | {self.id} ||||"
    #instance method
    def treats(self):
        return f"{self.name} wants the treat, bone!"


