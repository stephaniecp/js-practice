// This is an alternate method to resolve challenge 16

function isPrime(n)
{
    if (n < 2) // Numbers below 2 can't be prime, so we'll be returning "false"
        return false;

    // if (n == 2) // 2 is a prime number, so we'll be returning "true"
    //     return true;
    
    var maxDiv = Math.sqrt(n);
    for(var i = 2; i <= maxDiv; i++) // The Math.sqrt() static method returns the square root of a number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));