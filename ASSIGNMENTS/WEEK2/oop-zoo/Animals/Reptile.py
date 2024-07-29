from Animals.Animal import Animal

class Reptile(Animal):
    def __init__(self, name, species) -> None:
        super().__init__(name, species)
    
    #class method
    def bask_in_sun(self):
        return f"{self.name} the {self.species} is basking in the sun"