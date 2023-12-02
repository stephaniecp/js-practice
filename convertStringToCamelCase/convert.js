// source: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    console.log("String is: " + str.split("_") + "!")
    
    let parts = str.split("_-")
    let resultParts = []
    
    for (let i = 0; i < parts.length; i++) {
      let singleWord = parts[i] // Pull single word out of array of single words
      console.log("Value of singleWord: " + singleWord)
      // Make first letter of parts .tocaps (starting at i = 1)
      if (i === 0) {
        resultParts.push(singleWord)
      } else {
        let singleWordCapitalized = singleWord.capitalize()
        console.log(singleWordCapitalized)
        resultParts.push(singleWordCapitalized)
      }
    }
    
    // Combine all SingleWords into one new array with .join function into resultParts
    return resultParts.join()  

    console.log(resultParts)
} // End of function toCamelCase

console.log(toCamelCase("the_stealth_warrior"))