 /** 
## 03 - Prime Number Finder 

Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.
For example, primeFinder(11) should return [2, 3, 5, 7, 11].
Variations of this challenge have been reported to have been asked at interviews with Facebook. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge there first.
*/

/**
 * Let's make a convenient function for doing the core part of the work
 * @param {*} num 
 * @returns 
 */
function isPrime(num) {
    for (let possibleFactor = 2; possibleFactor < num; possibleFactor++) {
        if (num % possibleFactor === 0) {
            return false; //let's exit our function quickly with the answer
        }
    }
    return true; //Well, we couldn't find any factors (besides 1 and itself, according to the definition), so it must be prime
}

/**
 * The main function for the challenge
 * 
 * @param {*} n - the provided inclusive limit for the prime number search
 * @returns and array of prime numbers found that are less than or equal to the provided "n"
 */
function primeFinder(n) {
    let results = []; //We create an array to fill with our answers as we work 

    if (n >= 2) { //2 is a special prime, so let's throw it in
        results.push(2);
    }

    for (let primePossibility = 3; primePossibility <= n; primePossibility++) {
        if (isPrime(primePossibility)) { //Doing the work in an external function makes this easy to understand
            results.push(primePossibility); //save the answer to return later when we are done with our for loop
        }
    }

    return results;
}

/**
 * Just created this function to make it easy to nicely print the inputs and outputs
 */
function callPrimeFinder(n) {
    console.log(`>> Calling primeFinder with ${n}`);
    let result = primeFinder(n);
    console.log(`<< result: ${result}`);
}

callPrimeFinder(11);
callPrimeFinder(1000);


