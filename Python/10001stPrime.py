# Simple Program that gets the difference between the sum of the squares of the first 100 numbers and the sqaure of the sum of the first 100 numbers #
# Prabveer Pannu #
from math import sqrt
# fuction that checks where or not a number is prime and returns true if it is otherwise return false #
def primecheck(numberToCheck, i):
    # edge case for 2 #
    if(numberToCheck == 2):
        return True
    # this loops from 2 to the sqrt of the number +1 and applies module operation which is able to determine if a number is prime or not #
    for i in range(2, int(sqrt((numberToCheck))+1)):
        if( numberToCheck % i == 0 ):
            return False
    # returns true if the number is prime #
    return True
# initializing variables #
At100001stprime = False 
number = 2
primecount = 0
prime10001 = 0
# simple loop to make sure that we only output the 10001st prime number #
while At100001stprime == False:
    # checks if a number is prime and adds to the prime count if it is #
    if(primecheck(number, 2)):
         primecount += 1
    # checks if we reached the 10001st prime and if we do outputs it and stops the loop #
    if(primecount == 10001):
        At100001stprime = True
        prime10001 = number
    number += 1
# outputting the 10001st prime #
print("the 10001st prime is : " + str(prime10001))

