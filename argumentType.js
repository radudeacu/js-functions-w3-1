// Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(value) {
    const type = typeof value;

    if (type !== 'object') {
        return type;
    } else if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return 'object';
    }
}

// Example

console.log(getType(17));          // "number"
console.log(getType('Wheel'));     // "string"
console.log(getType(false));        // "boolean"
console.log(getType(undefined));   // "undefined"
console.log(getType({}));          // "object"
console.log(getType([]));          // "array"
console.log(getType(null));        // "null"
console.log(getType(() => {}));    // "function"


// It uses the typeof operator to get the basic type.
// If the type is not 'object', it returns that type directly.
// If the type is 'object', it performs additional checks:

// If the value is null, it returns 'null' (because typeof null is 'object' in JavaScript).
// If the value is an array (checked using Array.isArray()), it returns 'array'.
// Otherwise, it returns 'object'.