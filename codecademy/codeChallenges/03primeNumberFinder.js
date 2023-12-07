function primeOrFactor(n){
    // Starting the for loop with i = 2 because 0 or 1 would not be useful to define prime numbers
    for (let i = 2; i < n; i++) { 

        let isADivisor = (n % i === 0) 
        if (isADivisor === true) {
            console.log("i was a divisor, returning smallest divisor: " + i);
            return i;
        }; 
    };
    console.log("i was a prime number, returning: " + 1);
    return 1; 
};

let result1 = primeOrFactor(7);
console.log(result1);

let result2 = primeOrFactor(9);
console.log(result2);