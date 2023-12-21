function FahrenheitToCelsius(n){
    return Math.round(n -32 / 9/5); // About JS Round method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round 
}

console.log(FahrenheitToCelsius(32)); // Returns 31.29


//JG - Small note, I would use extra parenthesis to make the order of operations simpler to understand
function JG_FahrenheitToCelsius(n){
    return Math.round((n - 32) / (9/5)); // About JS Round method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round 
}