// Verified/reviewed

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