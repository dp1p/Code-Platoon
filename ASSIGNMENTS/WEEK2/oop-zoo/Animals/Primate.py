from Animals.Mammal import Mammal

class Primate(Mammal):
    def __init__(self, name, species):
        super().__init__(name, species)
    
    def climb_trees(self):
        return f"{self.name} the {self.species} is climbing trees "