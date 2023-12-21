// The function "calculate10" calculates the factorial of 10.
// The factorial of a number is the product of all positive integers up to that number. 
    // 10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 3,628,800
// In this case, it calculates 10 factorial (denoted as 10!), which is the product of all integers from 1 to 10.

function calculate10() {

    var prod = 1; // This line initializes a variable prod to 1. This variable will be used to accumulate the product of numbers in the factorial calculation.

    for(var i = 1; i <= 10; i++) // For loop that starts with i set to 1, continues as long as i is less than or equal to 10, and increments i by 1 in each iteration.
    {
        prod *= i; // Multiplies the current value of i with the accumulated product prod. This line effectively calculates the factorial by multiplying the current number in each iteration.
    }
    console.log(prod); // Prints the final product (which is the factorial of 10) to the console.

}

calculate10();


//JG - good and simple