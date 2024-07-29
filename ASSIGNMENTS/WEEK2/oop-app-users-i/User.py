# your User class goes here

#these classes will be a blueprint of holding data and method
# instance variables
class User:
    all_posts = [] 

    def __init__(self, name, email, drivers_license=None): #we can make an argument to be optional by setting a default value
        # instance variables aka instance attributes when creating a new object
        self.name = name
        self.email = email
        self.drivers_license = drivers_license

        pass
    
    def __str__(self) -> str: #dunder str method. Special behavior that allows a reader friendly version of the class object
        return f"{self.name}, {self.email}, {self.drivers_license}"


    
user1 = User("Daniel", "phanachoned@gmail.com", "Y7076012")
user2 = User("Len", "i-code-in-c+@gmail.com", "SADI134")
user = User("Conner", "onePunchMan@gmail.com", "123FJFA")

print(user1)
print(user2)
print(user)
