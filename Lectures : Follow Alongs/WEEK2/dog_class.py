#Creating a class of our own
#the word "instance" is only to objects, because these Object / instance variables will ONLY be in objects
#instance variable - only one occurance


#self is a reference to the instance (variables) itself
class Dog: #imagine dictionary having functions or having a specfic purpose
    def __init__(self, name, breed, color, sound):
        #instance attributes aka instance variables
        self.name = name 
        self.breed = breed
        self.color = color
        self.sound = sound
        print("new dog created")
        pass

    def __str__(self) -> str: #dunder str instance method allows a reader friendly version of the class object
        return f"{self.name} is a {self.breed}, with fur color of {self.color}, {self.sound}"
    
    def treats(self, give_treat):
        return f"{self.name} wants the treat, {give_treat}"


#we are creating a dog object, which will use the instances of the dog classes
coco = Dog('Coco', 'Pomerainan', 'Light Brown', 'RUFF!') 
kai = Dog('Kai', 'Pomerainan', 'BLACK', 'BARK!') #creating new instance of dog class


print(coco) #we are calling the instance
print(kai)
print(coco.treats("bone"))