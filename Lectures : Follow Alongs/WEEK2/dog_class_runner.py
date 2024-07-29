from dog_class import Dog

#instance of the student class
coco = Dog('Coco', 'Pomerainan', 'Light Brown', 'RUFF!', 11) 
kai = Dog('Kai', 'Pomerainan', 'BLACK', 'BARK!', 2) #creating new instance of dog class


print(coco) #we are calling the instance
print(kai)
print(coco.treats())

print(Dog.all_dogs)