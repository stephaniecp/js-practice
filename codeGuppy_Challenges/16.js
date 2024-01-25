// Prime number: a whole number greater than 1 that cannot be exactly divided by any whole number other than itself

function isPrime(number) {
    if (number <= 1) { 
      return false; // Because numbers below or equal to 1 can't be prime numbers
    }
  
    // Check for divisibility from 2 to half of the number
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        return false; // Not a prime number
      }
    }

  return true; // Prime numbers return "true"
  }

console.log(2, " is prime? ", isPrime(2)); // As formated in the Code Guppy exercise.

const result = isPrime(4);
console.log(result);
