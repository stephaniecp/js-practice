function filterPositiveNumbers(numbers) {
    
    let positiveNumbers = numbers.filter(function (num) { // Use the filter method to create a new array containing only positive numbers. 
        // About JS filter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        return num > 0; // Filters all numbers above 0 (zero being considered neither negative nor positive)
    });

    return positiveNumbers;
}

let myArray = [2, 3, -1, 0, 5, 7, 9, 10, 15, 95];
let resultArray = filterPositiveNumbers(myArray);

console.log("Original array was: " + myArray);
console.log("Positive numbers only are: " + resultArray);