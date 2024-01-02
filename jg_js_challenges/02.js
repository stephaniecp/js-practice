//Do you want to try this?

console.log()

//Create a function called "createAnArray" that takes an integer "start" and integer "end" 
//and returns an array containing all of the whole numbers between start and end

// JG - REPLIES:
// 
//  1. I like your approach of checking the "start" being greater than "end" and then just rejecting the situation, sometimes it is better to not
//      handle every situation, but you still need to do something to stop the program.
//  2. A few helpful general purpose notes to think about:
//      a. think about if... "else if" chains so that if one of your if conditions evaluates to true the rest are not checked
            // SCP - Oh right. I considered Else If but wasn't sure why chose with or without, makes sense
//      b. The "i++" with any code, maybe even a function that helps you go up or down in value
//      c. You can use "break" or "continue" keywords inside for loops. "continue" skips to the next cycle of the loop. "break" exits the loop completely
            // SCP - Cool, plz don't delete this comment, helpful info to review later
//      d. You can use "return" anywhere in a function to exit the function. You don't have to return anything, you can just stop the function
            // SCP - Cool, plz don't delete this comment, helpful info to review later
//      e. When you are ready, think about: "throw new Error('some message')", don't worry about it for now, but it is very useful for stopping execution

function createAnArray(start, end){

    let arrayWholeNumbersBetweenStartAndEnd = []
    
    for (let i = start; i <= end; i++){
        // let isAWholeNumber = (i % 1 === 0)
        let startIsAWholeNumber = (i % 1 === 0)
        let endIsAWholeNumber = (i % 1 === 0)
        if (startIsAWholeNumber === true && endIsAWholeNumber === true){
            arrayWholeNumbersBetweenStartAndEnd.push(i)
            console.log("The following number was added to the array: " + i)
        }
        if (start > end){
            console.log("End can't be greater than Start, try again.")
            break;
        }
        else if (startIsAWholeNumber === false || endIsAWholeNumber === false){ // SCP - Is || the OR operator? (can't google it right now)
            console.log("One or both of the parameters is not a whole number, try again.")
            break;
        }
    }

    console.log ("Current array is: " + arrayWholeNumbersBetweenStartAndEnd); 
    return arrayWholeNumbersBetweenStartAndEnd;

}

// createAnArray(1, 10);


function runAndTest() {
    let inputStart = 5;
    let inputEnd = 1;
    console.log(`start:${inputStart} end:${inputEnd}`)
    let result = jg_createAnArray(inputStart, inputEnd);
    if (typeof createAnArray !== "function") throw ("Function 'createAnArray' doesn't exist")
    if (result.length !== 5) throw ("Incorrect number of elements")
    if (result.reduce((sum, val) => sum += val) !== 15) throw ("Incorrect sum value of the array")
    else console.log("All tests passed, yay!") // SCP addition

    console.log(`result array:${result}`);
}

runAndTest();

// SCP - Thanks! We'll be landing soon (I think?) so we should put your laptop away anytime? 

function jg_createAnArray(start, end) {
    //check the quality of your inputs, and quit if they are bad:    
    if ((start % 1 !== 0) || (end % 1 !== 0)) {
        throw new Error("start and end must be whole numbers")
    }

    //This will equal 1 or -1 based on the input range and we can use that to increment i
    incrementValue = (end - start) / Math.abs(end - start);  
    let resultArray = [];

    //Notice the ending condition can change based on the increment value, see note below
    for (let i = start; (incrementValue > 0) ? (i <= end) : (i >= end); i += incrementValue) {
        resultArray.push(i);
    }
    return resultArray;
}

//JG NOTE: there is a very cool thing called a ternary operator, it is a compact type of inline if. see this example:

// let personIndex = 0; //0 for jon, 1 for steph
// let personName = (personIndex == 0) ? "jon" : "steph"

