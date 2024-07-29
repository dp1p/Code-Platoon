# your User class goes here

#these classes will be a blueprint of holding data and method
# instance variables

class User:
    posts = []  #to store all posts, static variable
    def __init__(self, name, email, drivers_liscence=None): #we can make an argument to be optional by setting a default value
        # instance variables aka instance attributes when creating a new object
        self.Name = name
        self.Email = email
        self.drivers_liscence = drivers_liscence
        self.User_posts = [] #when the user creates a post, it will automatically go into a list

    def __str__(self) -> str: #dunder str method. Special behavior that allows a reader friendly version of the class object
        return f"{self.name}, {self.email}, {self.drivers_liscence}"
    
    
    
    def create_a_post(self):

        self.input = input("Create your first post!\n-------------\n")

        print(f"\n\nYOU CREATED A NEW POST! \n{self.input} \n")

        self.User_posts.append(self.input) #appends the user input to the USER POSTS ONLY ARRAY
        self.posts.append(self.User_posts)  #appends ALL user posts to to all posts arr

        return self.User_posts, self.posts

    def see_my_posts(self):
        print(self.User_posts)

    def see_all_posts(self):
        print(self.posts)

    def delete_a_posts(self):
        pass



# user2 = User(**{"name":"Mike", "email":"mike@email.com", "drivers_liscence":"FDUI87"})
# user3 = User(**{"name":"Zack", "email":"zack@email.com", "drivers_liscence":"FDUI87"})      
user = User("John", "john@email.com", "FDUI87")
# print(user.Name == "John")
# print(user.Email == "john@email.com")
# print(user.drivers_liscence == "FDUI87")
    
# user1 = User("Daniel", "phanachoned@gmail.com", "Y7076012")
# user2 = User("Len", "i-code-in-c+@gmail.com", "SADI134")
# user = User("Conner", "onePunchMan@gmail.com", "123FJFA")
# print(user1)
# print(user2)
# print(user)
user.create_a_post()
user.see_my_posts()
# len(user.User_posts) == 0
# len(user.posts) == 0
# len(user.User_posts) == 0

# print(user.user_posts)