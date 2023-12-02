'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        
        let isAMultipleOf3 = (i % 3 === 0) // Checks is there is a 0 remainder after dividing i by 3
        let isAMultipleOf5 = (i % 5 === 0) // Checks is there is a 0 remainder after dividing i by 5
        
        if ((isAMultipleOf3 === true) && (isAMultipleOf5 === true)) { // Check that if i is a multiple of 3 and 5
            console.log("FizzBuzz")
        } else if ((isAMultipleOf3 === true) && (isAMultipleOf5 === false)) { // Check/execute next block if i is a multiple of 3 (not 5)
            console.log("Fizz")
        } else if ((isAMultipleOf3 === false) && (isAMultipleOf5 === true)) { // Check that if i is a multiple of 5 (not 3)
            console.log("Buzz")
        } else { // Executed if i is neither a multiple of 3 or 5
            console.log(i)
        }
    }
}