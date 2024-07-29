class Animal: #this will be the parent class
    def __init__(self, name, species):
        self._name = name
        self._species = species

    def __repr__(self) -> str:
        return f"NAME: {self.name} | SPECIES: {self.species}\n"
    
    def speak(self):
        return "Animal sound"
    
    
    @property #used as a getter if the user asks 
    def species(self):
        return self._species
    
    @property #used as a getter if the user asks 
    def name(self):
        return self._name
    