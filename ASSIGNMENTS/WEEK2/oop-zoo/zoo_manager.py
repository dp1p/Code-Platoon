#create a base class called ANIMAL
#class Animal 
#   name                    #instance attributes
#   species
#   methods(speak)             #instance method


#create a base class called MAMMAL, and inherit ANIMAL variables
#class Mammal(animal)         
#   def givebirth(self)             #instance method


#inherit the animal class and mammal class
#   class Bird ()
#   super(animal)
#   add wing span attribute
#   def methods(speak)      #polymorphism, using 
#       if self.species is bird...
#           return bird says chirp

from Animals.Animal import Animal
from Animals.Bird import Bird
from Animals.Mammal import Mammal
from Animals.Reptile import Reptile
from Animals.Primate import Primate
from Animals.Marsupial import Marsupial
from Animals.Aviary import Aviary


animal = Animal("Lion", "Felis leo")
print(animal.name)
print(animal.species)
print(animal.speak())

bird1 = Bird("Eagle", "Aquila chrysaetos", wingspan=2.5)
print(bird1.wingspan)

reptile = Reptile("Turtle", "Testudines")

print(reptile.bask_in_sun())
mammal = Mammal("Giraffe", "Giraffa camelopardalis")
mammal.give_birth() == "Giraffe the Giraffa camelopardalis has given birth"
primate = Primate("Chimpanzee", "Pan troglodytes")
print(primate.climb_trees())
marsupial = Marsupial("Kangaroo", "Macropus")
marsupial.carry_baby() == "Kangaroo the Macropus is carrying its baby"
aviary = Aviary()
aviary.birds.append(bird1)
print(aviary.birds)


# mammal = Mammal("Giraffe", "Giraffa")
# mammal.give_birth() == "Giraffe the Giraffa camelopardalis has given birth"
# animal = Animal("Lion", "Felis leo")