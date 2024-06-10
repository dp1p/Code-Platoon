import math

def romanNums(num):
    iteration_count = 0
    output_string = ''

    roman_nums_arabic = {
        
        "M" : 1000,
        "D" : 500,
        "C" : 100,
        "L" : 50,
        "X" : 10,
        "V" : 5,
        "I" : 1

    }

        #key            #value           #dictionary     items = all of them

    

    for roman_numerals, arabic_num, in roman_nums_arabic.items(): #this will iterate the dict like a list #how do i reitrerate to make it go back to the top of the list?
        if num % arabic_num == 9 or num % arabic_num == 8: #if the remainer ends in a '9' digit or '8' digit, we know it is a nine at the end
            # print(num ,"num")
            base = math.floor(num / arabic_num)  #we will just get the base number (ignoring the remainder
            output_string = output_string + str(base * roman_numerals)  #multiply that base number to the roman nums
            num = num % arabic_num #get the remainder of the num and keep iterating
            output_string = output_string + 'IX' #to add IX which would equal 9.
            print("ITERATION " + iteration_count)
            break
        elif math.floor(num / arabic_num) == 1: #checks to see if it has a remainder of 1, examples: 8/5 = 1.6, 1.4.... 
            # print(num , "num  ")
            num = num - arabic_num #to update the stored the value of (num - arabic num)
            output_string = output_string + roman_numerals
            # print(output_string)
        elif num > arabic_num: #if the number is greater than the roman numeral
            # print(num , "num")
            # print(arabic_num)
            base = math.floor(num / arabic_num)  #gets the number WITHOUT THE REMAINDER
            # print(base , "base")
            output_string = output_string + str(roman_numerals*base) 
            # print(output_string)
            num = (num % arabic_num) #to update the num value with the remainder
            iteration_count+=1
            print(output_string)
            print("ITERATION ", iteration_count)
            
            # print(num)
        else: 
            continue
        

    return print(output_string)


romanNums(4753)


        # else: #if the number is way to large
        #     base = math.floor(num / arabic_num)  #we will just get the base number (ignoring the remainder)
            #print(base)
        #     output_string = output_string + str(base * roman_numerals)  #multiply that base number to the roman `nums
        #     num = num % arabic_num #get the remainder of the num and keep iterating
            #print(num)
            