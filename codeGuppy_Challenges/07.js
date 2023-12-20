// Coding challenge #7:	Calculate the sum of odd numbers greater than 10 and less than 30

function sumNumbers11to29() { // Declared function to calculate and print the sum of numbers from 11 to 29.

    var sum = 0; // This line initializes a variable sum to 0. This variable will be used to accumulate the sum of numbers.

    for(var i = 11; i <= 29; i += 2) // For loop that starts with i set to 11, continues as long as i is less than or equal to 29, and increments i by 2 in each iteration. 
    // The loop iterates through odd numbers in the range from 11 to 29.
    {
        sum += i; // Adds the current value of i to the sum in each iteration, effectively accumulating the sum of odd numbers from 11 to 29.
    }
    console.log(sum)

}

sumNumbers11to29();