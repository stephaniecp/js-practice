function isAFactor(possibleFactor, n) {
    return (n % possibleFactor === 0);
} 

function isPrime(n) {
  for (let possibleFactor = 2; possibleFactor < n; possibleFactor++) {
      if (n % possibleFactor === 0) {
          return false; 
      }
  }
  return true; 
}

function sumOfPrimeFactors(n) {
  // let arrayOfAllPrimeFactors = []
  let ongoingSumOfPrimeFactors = 0
  for (let possibleFactor = 2; possibleFactor < n; possibleFactor++) {
    if(
        (isAFactor(possibleFactor, n) === true) 
        && (isPrime(possibleFactor) === true)
        )
        {
        ongoingSumOfPrimeFactors += possibleFactor
        }
  }
  return ongoingSumOfPrimeFactors;
}

console.log(sumOfPrimeFactors(91));

// // Leave this so we can test your code:
// module.exports = sumOfPrimeFactors;