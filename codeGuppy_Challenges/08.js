// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
// Formula C to F: °F = (°C × 9/5) + 32 

// Option 1
function celsiusToFahrenheit(n){
    return n * 9/5 + 32;
    // return n * 1.8 + 32;  // Alternative format
}
console.log("Option 1 returns: " + celsiusToFahrenheit(20)); // Returns 68 F
console.log("Option 1 returns: " + celsiusToFahrenheit(0)); //Returns 32 F
console.log("Option 1 returns: " + celsiusToFahrenheit(-40)); // Returns 40F

// Option 2 - Like #1 but rounded result
function celsiusToFahrenheit2(n){
    return Math.round(n * 9/5 + 32); // About JS Round method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round 
}
console.log("Option 2 returns: " + celsiusToFahrenheit2(21)); // 

// Option 3 - Without return statement
function celsiusToFahrenheit3(n){
    const result = n * 9/5 + 32;
    console.log("Option 3 returns within function: " + result)
}
console.log("Option 3 returns out of function: " + celsiusToFahrenheit3(25)); // Returns 77 F / Undefined (because no explicit 'return' statement)

// Option 4 - With return statement and storing result in variable
function celsiusToFahrenheit4(n){
    const result = n * 9/5 + 32;
    return result;
}
console.log("Option 4 returns: " + celsiusToFahrenheit4(21)); // Returns  69.8F

