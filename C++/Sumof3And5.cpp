#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Simple Program that gets the sum Of all Mulltiples of 3 or 5 below 1000 //
// Prabveer Pannu //
int main()
{
    // Initializing the Sum  //
    int sum = 0;
    // loop that loops from 1 to 1000 //
    for(int number = 1; number < 1000; number++)
    {
        // if statement that checks if the current number is a multiple of 3 or 5 and if true adds it to the sum //
        if(number % 3 == 0 || number % 5 == 0)
        {
            sum += number;
        }

    }

    // outputing the total sum after loops to below 1000 //
    cout << "The sum of all multiples of 3 or 5 below 1000: " << sum << endl;

    return 0;

}