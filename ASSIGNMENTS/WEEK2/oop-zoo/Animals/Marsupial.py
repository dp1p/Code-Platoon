from Animals.Mammal import Mammal

class Marsupial(Mammal):
    def __init__(self, name, species):
        super().__init__(name, species)
    
    def carry_baby(self):
        return print(f"{self.name} the {self.species} is climbing trees ")