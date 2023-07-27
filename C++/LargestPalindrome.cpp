#include <iostream>
#include <vector>
#include <string>
#include <bits/stdc++.h>

using namespace std;

// Simple Program that gets the largest palindrome of 3 digit numbers //
// Prabveer Pannu //
// simple check that checks of the number is a palindrome or not //
bool palibdromeCheck(string num)
{
    // set a string that will be = to num reversed
    string reversednum = num;
    // reverse num //
    reverse(num.begin(), num.end());
    // check if reversed num is equal to the original num //
    if(reversednum == num)
        return true;
    return false;
}
int main()
{   
    // nested loop that will go through all the numbers to find the largest palindrome //
    int number1 = 999, number2 = 999, max = 0, firstmulti, secondmulti;
    for(int i = 999; i > 100; i--)
    {
       
        for(int x = i; x > 100; x--)
        {
            string sum = to_string(x * i);
            // checks if something is a palindrom or not //
            if(palibdromeCheck(sum))
            {
                // checks if the current plaindrom is larger than the on we have set as the largest palindrom so far //
                if(stoi(sum) > max )
                {
                    max = stoi(sum);
                    firstmulti = x;
                    secondmulti = i;
                }


            }
        }
    }

    // outputing results //
    cout << "The largest plaindrome it the number " << firstmulti << " times the number " << secondmulti << " which equals: " << max << endl;
    return 0;

}