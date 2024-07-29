
class BoggleBoard:
  
  def __init__(self):
    self = self



  def __str__(self) -> str:
    return """
----
----
----
----
"""

  def shake(self):
    rows, cols = (4, 4)

    arr = [[0]*cols]*rows

    for row in arr:
      print(row)

    # return self.shake == ([[1,2,3,4],
    #                       [5,6,7,8],
    #                       [9,10,11,12],
    #                       [13,14,15,16]])



    



game = BoggleBoard()

print(game)
user_input = input("Wanna shake it? Enter: <shake> ! \n")

if user_input == "shake":
  game.shake()
    
else:
  print("Fine. Thanks I guess.")
