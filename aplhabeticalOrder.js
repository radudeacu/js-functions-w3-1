// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabetString(str) {
    return str.split('').sort().join('');
}

// Example
console.log(alphabetString('mango')); // agmno



// str.split(''): This splits the input string into an array of individual characters.
// .sort(): This sorts the array of characters. By default, JavaScript's sort() method sorts strings alphabetically.
// .join(''): This joins the sorted array back into a string.