
// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const number = 12345;

// arrow funct

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(reversedNum(number));

// regular funct 

// function reversedNum(num) {
//     return (
//       parseFloat(
//         num
//           .toString()
//           .split('')
//           .reverse()
//           .join('')
//       ) * Math.sign(num)
//     )                 
//   }