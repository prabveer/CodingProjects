from math import sqrt
from functools import reduce

# returns a list of all the factors of the number sent in #
def factors(n):    
    return set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))

#checking if the number is prime or not #
def IsPrime(num):
    # edge case for a prime number #
    if(num <=1):
        return False
    # loops to check if the number is prime by checking all numbers up to the sqrt of number #
    for i in range(2, int(sqrt(num))+1):
        if(num % i == 0):
            return False
    return True

# initialzing variables #
number = 600851475143
largestPrimeFactor = 0

factor = factors(number)

# checks for the largest prime factor of number #
for x in factor:
    if(IsPrime(x) and x > largestPrimeFactor):
        largestPrimeFactor = x
print("largest Prime Factor Of " + str(number) + " is equal to: " + str(largestPrimeFactor))

