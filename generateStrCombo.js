// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function generateCombinations(str) {

    const n = str.length;
    const combinations = [];

    // Generate all possible bitmasks from 1 to 2^n - 1
    for (let i = 1; i < (1 << n); i++) {
        let combination = '';
        for (let j = 0; j < n; j++) {
            // If jth bit is set in i, add jth character to the combination
            if (i & (1 << j)) {
                combination += str[j];
            }
        }
        combinations.push(combination);
    }

    return combinations;
}

// Example
const inputString = 'dog';
const result = generateCombinations(inputString);
console.log(result.join(','));




// This solution uses bitwise operations to generate all possible combinations. Here's how it works:

// We iterate from 1 to 2^n - 1, where n is the length of the input string. Each number in this range represents a unique combination of characters.
// For each number, we check which bits are set (1) and include the corresponding characters in our combination.
// We use the bitwise AND operation (&) to check if a particular bit is set.
// This approach generates all non-empty combinations in a single loop, making it more efficient and elegant.

// Key advantages of this method:

// Efficiency: It's generally faster for shorter strings, as it avoids recursive calls.
// Simplicity: The core logic is contained in a single loop, making it more concise.
// Uniqueness: Each combination is generated exactly once, without the need for additional data structures to track duplicates.

// However, it's worth noting that this method has limitations:

// It may not be as efficient for very long strings (more than 31 characters on 32-bit systems) due to integer size limitations.
// It might be less intuitive for developers not familiar with bitwise operations.

// For most practical purposes involving reasonable string lengths, this bitwise method provides an elegant and efficient solution to generate all combinations of a string.