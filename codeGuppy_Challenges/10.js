function sumOfNumbersWithinMyArray(myArray){
    let sum = 0;
    for (let i = 0; i < myArray.length; i++){

        sum += myArray[i] // Shorthand notation for updating the value of the sum variable. It is equivalent to sum = sum + ... 
        //In this case, it adds the value at the current index to the current value of sum.

    }
    return sum;
}

let myArray = [2, 3, -1, 5, 7, 9, 10, 15, 95]; 
let sum = sumOfNumbersWithinMyArray(myArray);
console.log("Sum value is: " + sum);