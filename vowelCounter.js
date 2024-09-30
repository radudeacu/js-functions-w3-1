// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


function countVowels(str) {
    // Convert the string to lowercase to simplify matching
    const lowerStr = str.toLowerCase();
    
    // Define the vowels we want to count
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Use reduce to count the vowels
    return lowerStr.split('').reduce((count, char) => {
      return vowels.includes(char) ? count + 1 : count;
    }, 0);
  }
  
  // Test the function
  const testString = 'The quick brown fox';
  console.log(countVowels(testString)); // Output: 5


  


//   This function does the following:

// It converts the input string to lowercase to simplify matching (so we don't have to check for both uppercase and lowercase vowels).
// It defines an array of vowels we want to count.
// It splits the string into an array of characters and uses the reduce method to count the vowels.
// For each character, it checks if it's included in the vowels array. If it is, the count is incremented.
// Finally, it returns the total count of vowels.