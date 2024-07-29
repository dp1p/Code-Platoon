from Animals.Animal import Animal

class Mammal(Animal):
    def __init__(self, name, species):
        super().__init__(name, species)

    #class method
    def give_birth(self):
        return f"{self.name} the {self.species} has given birth!"