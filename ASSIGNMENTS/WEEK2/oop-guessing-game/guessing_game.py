import random

class GuessingGame:
    def __init__(self, number): #we intiate the class
        self.number = number  #we get the number from random.randint argument on line 25

    def guess(self, last_guess): #this instance method deals with the guessing game
       last_guess = int(last_guess) #intially last guess would be passed as an int. we need to convert the guess to a int so it can be compared to an int, rather than a string
       if last_guess != self.number: #if last guess doesnt equal to the random num
            if last_guess > self.number:
                return "Too Low!"
            elif last_guess < self.number:
                return "Too High!"
       
    def solved(self):
        if last_guess == self.number: #if the last guess was equal to the random number
            return True
        else:
            return False

    


# ----- main.py -----
game = GuessingGame(random.randint(1,100))
last_guess  = None
last_result = None

while game.solved() == False: #while game hasnt been solve...we will loop
  if last_guess != None: 
    print(f"Oops! Your last guess ({last_guess}) was {last_result}.")
    print("")

  last_guess  = input("Enter your guess: ")
  last_result = game.guess(last_guess)


print(f"{last_guess} was correct!")
