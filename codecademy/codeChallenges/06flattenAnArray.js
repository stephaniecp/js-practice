function flattenArray(arr) {
    return arr.reduce((flatArray, currentElement) => { // Using the .reduce method for flatening the array
      
      if (Array.isArray(currentElement)) { // Checking if the current element is an array
        // If it's an array, recursively flatten it and concatenate with the result so far
        return flatArray.concat(flattenArray(currentElement)); // flattens + concats if so
      } else {
        return flatArray.concat(currentElement); // only add it to result array otherwise
      }
    }, []);
  }
  
  const inputArray = [1, 2, [3, 4, 5], 6, [7, 8], 9];
  const result = flattenArray(inputArray);
  console.log(result); // Somehow seems to put results over two lines when running the file
  console.log(result + ", eh!");  // Seems to show all on one line
  console.log(`<< result:${result}`); // Replicating Jon's way