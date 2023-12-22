// Coding challenge #14: Print the first 10 Fibonacci numbers 
// Fibonacci definition: a series of numbers in which each number is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// Method 1 (Steph's)
function findFibonacci(n) {
    let fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        // fibonacciArray[i - 1] > Accesses the last element (the (i-1)-th element) in the fibonacciArray. (i-1)-th element is the number just before the one we are calculating.
        // fibonacciArray[i - 2] > Accesses the second-to-last element (the (i-2)-th element) in the fibonacciArray.
        let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2]; // This calculates the sum of the last two Fibonacci numbers and stores the value in nextFibonacci
        fibonacciArray.push(nextFibonacci); // .push oprerator details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    }

    return fibonacciArray;
}
let fibonacciSequence = findFibonacci(10);
console.log("The first 10 Fibonacci numbers:", fibonacciSequence.join(', '));

// Method 2 (CodeGuppy: https://codeguppy.com/code.html?rKOfPxHbVwxNWI2d8orH)
function codeGyppyFindFibonacci() {
    var f0 = 0;
    console.log(f0);

    var f1 = 1;
    console.log(f1);

    for(var i = 2; i < 10; i++)
    {
        var fi = f1 + f0;
        console.log(fi);
        
        f0 = f1;
        f1 = fi;
    }
}
codeGyppyFindFibonacci();


