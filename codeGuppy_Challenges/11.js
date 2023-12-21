// PART 1 - Calculate the sum of all numbers in the array
function sumOfNumbersWithinMyArray(myArray) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}

let myArray = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumOfNumbersWithinMyArray(myArray);

console.log("Sum value is: " + sum);

// PART 2 - Calculate the average (divide sum by number of numbers in the array)
function calculateAverageNumberInArray(myArray, sum) {
    let average = sum / myArray.length;
    return average;
}

let average = calculateAverageNumberInArray(myArray, sum);
console.log("Average value is: " + average);