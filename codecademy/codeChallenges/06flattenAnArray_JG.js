/*
## 06 - Flatten an Array 

Write a function, flattenArray(), that takes in a 2-dimensional array, flattens it into a 1-dimensional array, and returns it. You can assume that you will only be given one or two-dimensional arrays
For example, flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

function flattenArray(input2DArray) {
    let resultArray = [];
    for (let i = 0; i < input2DArray.length; i++){
        let elementI = input2DArray[i];
        if (Array.isArray(elementI)) {
            console.log(`found subarray:${elementI}`)
            for (let j = 0; j < elementI.length; j++){ //This one level deep solution only works because they say "two-deminsional arrays", otherwise recursion would be used here for deeper arrays of some sort. For recursion, imagine passing in the resultArray to the function itself, but with a default constructor of a new empty array. Woah!
                let elementJ = elementI[j];
                resultArray.push(elementJ);
            }
        } else {
            resultArray.push(elementI);
        }
    }

    return resultArray;

}

function callFlattenArray(input2DArray) {
    console.log(`>> input2DArray: ${input2DArray} (subarrays not displayed correctly)`);
    let result = flattenArray(input2DArray);
    console.log(`<< result:${result}`);
}


callFlattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9])