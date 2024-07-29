from Animals.Animal import Animal

class Bird(Animal):
    
    def __init__(self, name, species, wingspan):
        super().__init__(name, species) #super signifies superceding to graB the parent class
        self._wingspan = wingspan #bird class's unique instance variable

    @property#this is a getter, we are GETTING the wing span, not modifying it, so we dont need a setter
    def wingspan(self):
        return self._wingspan

