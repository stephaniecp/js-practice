'use strict';

console.log("Steph checking if file loads")


// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


function fizzBuzz(n) {
    // Write your code here
    
    // Steph note: the below variable was my first attempt at obtaining the multiple of 3 and 5
    // const multipleOf5 = [5,10,15,20,25,30,35,40,45,50]
    // const multipleOf3 = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48]

    for (let i = 1; i <= n; i++){ // Steph note: Iterates through i value from 1 to n (inclusive)
        let isMultipleOf3 = (i % 3 === 0)
        let isMultipleOf5 = (i % 5 === 0)
        if ((isMultipleOf3 === true) && (isMultipleOf5 === true)) {
            console.log("Is a multiple of 3 and 5");
        } else if ((isMultipleOf3 === true) && (isMultipleOf5 === false)) {
            console.log("Is a multiple of 3 but not 5");
        } else if ((isMultipleOf3 === false) && (isMultipleOf5 === true)) {
            console.log("Is a multiple of 5 but not 3");
        } else {
            console.log(i);
        }
    }
    
    // function checkInMultipleOf3() {
    //     if ((i % 3 === 0)) { // Steph note: checks if n can be divided by 3 AND return an integer (has a remainder of 0)
    //         return true // Steph note: returns true if multiple of 3
    //     } else {
    //         return false
    //     }   
    // }
    // function checkInMultipleOf5() {
    //     if ((i % 5 === 0)) { // Steph note: checks if n can be divided by 3 AND return an integer (has a remainder of 0)
    //         return true // Steph note: returns true if multiple of 3
    //     } else {
    //         return false
    //     }   
    // }

    // if ((checkInMultipleOf3 = true) && (checkInMultipleOf5 = true)) // Checks if i is a multiple of 3 and 5
    // console.log("Is a multiple of 3 and 5");
    // } else if ((checkInMultipleOf3 = true) && (checkInMultipleOf5 = false)) { // Checks if i is a multiple of 5 (and not 3)
    //     console.log("Is a multiple of 3 but not 5"); 
    // }
    // else if ((checkInMultipleOf3 = false) && (checkInMultipleOf5 = true)) { // Checks if i is a multiple of 5 (and not 3)
    //     console.log("Is a multiple of 5 but not 3"); 
    // }
    // else ((checkInMultipleOf3 = false) && (checkInMultipleOf5 = false)) { // Check for multiples of neither 3 or 5
    //     console.log("Is neither a multiple of 3 or 5"); 
    //     // console.log(i); // Steph note: Prints current value of i

    

} 



fizzBuzz(15); // Steph note: calls the functions and set an n value


// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     fizzBuzz(n);
// }
