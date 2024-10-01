// Write a JavaScript function which returns the n rows by n columns identity matrix.


function createIdentityMatrix(n) {
    return Array(n).fill().map((_, i) => 
      Array(n).fill().map((_, j) => i === j ? 1 : 0)
    );
  }


console.log(createIdentityMatrix(3));



// This function works as follows:

// It takes an input n, which determines the size of the square matrix.
// It uses Array(n).fill() to create an array of length n.
// The outer map creates n rows.
// The inner map fills each row with n elements.
// The ternary operator i === j ? 1 : 0 places 1 on the main diagonal and 0 elsewhere.