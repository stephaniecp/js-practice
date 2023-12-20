// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
// Formula C to F: °F = (°C × 9/5) + 32 

function celsiusToFahrenheit(n)
    {
        return n * 9/5 + 32;

        // return n * 1.8 + 32;  // Alternative format

    }

console.log(celsiusToFahrenheit(20)); // Returns 68 F
console.log(celsiusToFahrenheit(0)); //Returns 32 F
console.log(celsiusToFahrenheit(-40)); // Returns 40F