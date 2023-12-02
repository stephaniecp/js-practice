// Calculate the Mean and Mode
// Challenge URL: https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript

// Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

// For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

//RUNNING INSTRUCTIONS
// Open terminal, navigate to: ...js-practice/Codecademy/codeChallenges
// node statsFinder.js
// Back up to parent with cd ../

function statsFinder(numbersArray) {

    // Sums all of the numbers in numbersArray and store the value in sumOfArrayNumebrs
    let sumOfArrayNumbers = 0;
    numbersArray.forEach(num => {
        sumOfArrayNumbers += num;
    });
    console.log("Sum of the numbers in the numbersArray: " + sumOfArrayNumbers)

    // Mean Calculation 
    let meanValue = sumOfArrayNumbers/numbersArray.length;
    console.log("The mean value of the numbersArray is: " + meanValue)

    // For Mode Calculation
    let totalNumbersInNumbersArray = numbersArray.length;
    let freq = 0, freqNum, list = []
    let modeValue = 0; 

    // Count the frequency of each number in the array
    for (let i = 0; i < totalNumbersInNumbersArray; i++) {
        let currentNum = numbersArray[i];
        if (list[currentNum] === undefined) {
            list[currentNum] = 1;
        } else {
            list[currentNum]++;
        }
        if (list[currentNum] > freq) {
            freq = list[currentNum];
            freqNum = currentNum;
        }
    }

    // Mode Calculation
    if (freq > 1) {
        modeValue = freqNum;
        console.log("The mode value of the numbersArray is: " + modeValue);
    } else {
        console.log("The numbersArray does not have a mode.");
    }

    return { meanValue, modeValue}; // Returns an object with both values (JS won't support returning two values otherwise)
  }

function bonusMedianStatFinder() {
    let isAMultipleOfTwo = (i % 2 === 0);
}

console.log(statsFinder([10, 10, 20, 40]))

//   console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  

//   // Leave this so we can test your code:
//   module.exports = statsFinder;