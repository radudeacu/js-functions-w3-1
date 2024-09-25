// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Example

console.log(capitalizeWords('messi is the greatest of all time'));




// str.replace(regex, replacementFunction): This method searches the string for matches to the regex and replaces them using the provided function.
// /\b\w/g: This is the regular expression:

// \b: Matches a word boundary (the position between a word character and a non-word character)
// \w: Matches any word character (equivalent to [a-zA-Z0-9_])
// /g: Global flag, which means it will replace all occurrences, not just the first one


// char => char.toUpperCase(): This is an arrow function that takes each matched character and returns its uppercase version.

// The function will capitalize the first letter of each word, including words that start with numbers. It will work correctly with strings that already have some capitalized letters, leaving them as they are.