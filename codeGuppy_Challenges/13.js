// Coding challenge #13: Find the maximum (highest) number in an array of numbers

function findMaxNumber(myArray){
    // .math operator details: https://developer.mozilla.org/en-US/docs/Web/EXSLT/math/max
    return Math.max(...myArray); // ... = spread operator. It is used to spread the elements of the array (myArray) as individual arguments to a function.
}

let myArray = [8, 6, 7, 5, 3, 0, 9];
let maxNumber = findMaxNumber(myArray);

console.log("Hello world?");
console.log("Maximum/highest number: " + maxNumber);