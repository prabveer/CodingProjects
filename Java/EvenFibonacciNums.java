
// Simple Program that gets the sum Of all Even Fibonacci numbers below 4000000 //
// Prabveer Pannu //

class Main {
    public static void main(String[] args) {
        // initializeing the first two fib nums as well as sum //
        int Fibnum1 = 1, Fibnum2 = 2, sum = 0;
        // looping until our 2nd fib number is above 4000000 //
        while(Fibnum2 < 4000000)
        {
            // checking if our fib number is even if it is it can be added into the sum //
            if(Fibnum2 % 2 == 0)
            {
                sum += Fibnum2;
            }
            // holder is just a variable that holds the current value of fibnum2 so that we can replace fib num 2 with the next number in the sequence while still keeping //
            // the number of fib 2 for fib 1 //
            int holder = Fibnum2;
            // replaceing fib 2 with the next number in the sequnce //
            Fibnum2 += Fibnum1;
            // seting fib 1 to what fib 2 was before it became the next num in the seqeunce //
            Fibnum1 = holder;
        }
        // outputing the result //
        System.out.println("Sum of even Fibonacci numbers that does not exceed four million: " + sum );

    }
}