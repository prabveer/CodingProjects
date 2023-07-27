// Simple Program that gets the difference between the sum of the squares of the first 100 numbers and the sqaure of the sum of the first 100 numbers //
// Prabveer Pannu //
public class SquareDiff {
class Main {
    public static void main(String[] args) {
        // initialize variables //
        int SumofSquares = 0, SquareofSums = 0;
        // first loop that gets the sum of squares //
        for (int i = 1; i <= 100; i++)
        {
            SumofSquares += i * i;

        }
        // second loop that will get the squares of the sums //
        for ( int i = 1; i<= 100; i++)
        {
            SquareofSums += i;
        }
        // setting sum equal to the difference between the square of sums and sum of squares //
        int sum = SquareofSums * SquareofSums - SumofSquares;
        // outputing results //
        System.out.println("the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum: " + sum );

    }
}
}
