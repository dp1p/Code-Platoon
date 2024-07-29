class CarManager:

    #Declaring class instances
    all_cars = [] #the empty list where we will be putting indivudal car dictionaries into
    id_Counter = 0
    
    def __init__(self, make, model, year, mileage, services) -> None: #anything in the init method of the class will automatically intialize
        self._id = CarManager.id_Counter
        self._make = make
        self._model = model
        self._year = year
        self._mileage = mileage
        self._services = services
        
        #Class Methods              
        CarManager.all_cars.append(self)
        CarManager.id_Counter += 1 #everytime a new instance is created from the class carmanager, it will keep track of it
    
    # @property
    # def get_make(self):
    #     return self._make
    
    # @get_make.setter #this
    # def set_make(self, new_make):
    #     if type(new_make).isnumeric():
    #         print("Must have no numbers.")
    #     else:
    #         print("Nice")
    #         return self._make == new_make
        

    def add_a_car(user_input):
        print("---------------")
        print("1. Add a car         ENTER Q TO GO BACK MAIN MENU")
        print("---------------")
        individual_car_dict = {} #empty so we can add a car information to the dict, and then append the dictionary to a list
        
        user_input = input("Enter car make: ")
        
        while True: #to make sure the while loop checks user input
            if user_input == "q": 
                print("BACK TO MAIN MENU...")
                individual_car_dict = { } #this will essentially delete the progress of the car entered
                return main() #GOES BACK TO MAIN MENU IF USER ENTERS Q
            elif user_input.isnumeric() != True: #IF USER INPUT DOES NOT HAVE A NUM INSIDE
                individual_car_dict['MAKE'] = user_input #WE WILL ADD THIS KEY, MAKE. AND ASSIGN IT TO VALUE, USER_INPUT
                print(individual_car_dict)
                break
            else:
                print("BZZZZZ TRY AGAIN")
                user_input = input("Enter car make: ")
       #----------------Start Function-----------------         
      @staticmethod
      def get_data(data_type):  
        user_input = input("Enter car {data_type}: ")
        while True: #to make sure the while loop checks user input
            if user_input == "q":
                print("BACK TO MAIN MENU...")
                individual_car_dict = { }
                return main() #GOES BACK TO MAIN MENU
            elif type(user_input) == str : #if user DOES ENTER SOMETHING
                individual_car_dict[{data_type}] = user_input
                print(individual_car_dict)
                break
            else:
                print("BZZZZZ TRY AGAIN")
                user_input = input("Enter car {data_type}: ")
        return user_input
        #----------------------End Function----------------------
        # IN main program------
        

       
        def new_car():
            nouser = 1
            while nouser == 1:
                inpt = input("you want to enter a car y/n?" )
                if inpt == 'y': 
                    model = get_data("model") # get_data must return this data to save into a variable!
                    year = get_data("year")
                    data = get_data("type")
                    newcar = CarManager(model, year, data)
                    nouser = 0
                else: 
                    pass
        #end in main program ------


        # We are making your code soooo messy lol




        user_input = input("Enter car year: ")
        while True: #to make sure the while loop checks user input
            if user_input == "q":
                print("BACK TO MAIN MENU...")
                individual_car_dict = { } #this will essentially delete the progress of the car entered
                return main() #GOES BACK TO MAIN MENU
            elif user_input.isnumeric() == True:
                individual_car_dict['YEAR'] = user_input
                print(individual_car_dict)
                break
            else:
                print("BZZZZZ TRY AGAIN")
                user_input = input("Enter car year: ")


        user_input = input("Enter car mileage: ")
        while True: #to make sure the while loop checks user input
            if user_input == "q":
                print("BACK TO MAIN MENU...")
                individual_car_dict = { } #this will essentially delete the progress of the car entered
                return main() #GOES BACK TO MAIN MENU
            elif user_input.isnumeric() == True:
                individual_car_dict['MILEAGE'] = user_input
                print(individual_car_dict)
                break
            else:
                print("BZZZZZ TRY AGAIN")
                user_input = input("Enter car mileage: ")
        
        CarManager.all_cars.append([CarManager.id_Counter, individual_car_dict])

        print("RETURNING TO MAIN MENU...")

        print(CarManager.all_cars)
        return main()



def main():

    print(      """----  WELCOME  ----
1. Add a car
2. View all cars
3. View total number of cars
4. See a car's details
5. Service a car
6. Update mileage
7. Quit""")
    
    user_input = input() 
    while user_input not in ['1', '2', '3', '4', '5', '6', '7', 'q']:
        print("Please Enter a Valid Choice!")
        user_input = input()

    else:
        match user_input: #this will match whatever user inputted
            case '1':
                CarManager.add_a_car(user_input)
            case '2':
                print(CarManager.all_cars)
            case '3':
                print(CarManager.all_cars)
            case 'q':
                print("QUITTING PROGRAM!")

        


    # if user_input = 1:
    #     print("ddddd")
    #     CarManager.add_a_car()

main()




