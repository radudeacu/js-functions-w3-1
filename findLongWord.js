// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function findLongWord(str) {
    const words = str.split(' ');

    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

// Example

const exampleString = 'Visca Barca, Visca Catalunya';
console.log(findLongWord(exampleString));



// It splits the input string into an array of words using the split() method with a space as the delimiter.
// It then uses the reduce() method to iterate through the array of words.
// For each word, it compares its length with the length of the current longest word.
// If the current word is longer, it becomes the new longest word.
// Finally, it returns the longest word found.