// Calculate the Mean and Mode
// Challenge URL: https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript

// Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

// For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

//RUNNING INSTRUCTIONS
// Open terminal, navigate to: ...js-practice/Codecademy/codeChallenges
// node statsFinder.js
// Back up to parent with cd ../



function statsFinder(numbersArray) {
    //start with computing the average. Using array.reduce is very compact way to run over each of the array entries and create a sum
    average = numbersArray.reduce((sum, current) => sum + current) / numbersArray.length

    //This approach is too brilliantly elegant, but requires some explanation:
    //See these concepts:
    // - array.sort - quick way to use an arrow function to sort a list
    // - array.filter - quick way to find elements in an array matching some condition
    // - array.pop - removes the last element of an array
    // Basically it sorts the array to have more frequent elements at the end of the list and then pulls the last item off the list 
    mode = numbersArray.sort((a,b) => numbersArray.filter(v => v===a).length - numbersArray.filter(v => v===b).length).pop();

    return [average, mode];
}

function callStatsFinder(numbersArray) {
    console.log(`>> input: ${numbersArray}`);
    let result = statsFinder(numbersArray);
    console.log(`<< result: ${result}`);
}

callStatsFinder([10, 10, 20, 40]);
callStatsFinder([10, 20, 20, 40]);
callStatsFinder([500, 400, 400, 375, 300, 350, 325, 300]);
  

//   // Leave this so we can test your code:
//   module.exports = statsFinder;