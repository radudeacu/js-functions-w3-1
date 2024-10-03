// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements";
    }
    
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    
    if (sortedArr.length < 2) {
      return "Array should have at least two distinct elements";
    }
    
    return `${sortedArr[1]},${sortedArr[sortedArr.length - 2]}`;
  }


  const sampleArray = [1, 2, 3, 4, 5];
  console.log(findSecondLowestAndGreatest(sampleArray)); // Output: "2,4"


//   First, it checks if the array has at least two elements. If not, it returns an error message.
// It creates a new array sortedArr by:

// Using new Set(arr) to remove duplicates
// Spreading the Set back into an array
// Sorting the array in ascending order


// It checks if the sorted array (without duplicates) has at least two elements. If not, it returns an error message.
// Finally, it returns a string with the second element (index 1) as the second lowest, and the second-to-last element as the second greatest, separated by a comma.