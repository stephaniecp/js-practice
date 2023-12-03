// Calculate the Mean and Mode
// Challenge URL: https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript

// Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

// For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

//RUNNING INSTRUCTIONS
// Open terminal, navigate to: ...js-practice/Codecademy/codeChallenges
// node statsFinder.js
// Back up to parent with cd ../



function statsFinder(numbersArray) {

    average = numbersArray.reduce((sum, current) => sum + current) / numbersArray.length


    return [average]
}


console.log(statsFinder([10, 10, 20, 40]))

//   console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  

//   // Leave this so we can test your code:
//   module.exports = statsFinder;