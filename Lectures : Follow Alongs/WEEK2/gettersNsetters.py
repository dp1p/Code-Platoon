class Dog:
    def __init__(self, name, breed, age) -> None:
        self.name = name
        self.breed = breed
        self._age = age


    def __repr__(self) -> str:
        return f"{self.name}, {self.breed}, {self._age}"


    @property
    def get_age(self):
        return self._age #this is to simply get the age, using the get age method
    
    
    @get_age.setter #if the user enters a new_age, user will use new_age instance method
    def new_age(self, new_age):
        if type(new_age) == int:
            self._age = new_age
    
kai = Dog("Kai", "Pomerainian", 13)
print(kai)
kai.new_age(1)
kai.get_age(1)