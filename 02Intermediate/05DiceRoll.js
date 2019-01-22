// let numOne = 22;
// let numTwo = 7;

// console.log(Math.round(22/7)); // returns integer part only

// let result = numOne / numTwo ;
// console.log(result.toFixed(2)); // show only 2 digit after decimal

// console.log(Math.floor(result.toFixed(2))); // shows exact lower value of int for ex 3.99 -> 3, and 3.11 -> 3
// console.log(Math.ceil(result.toFixed(2))); // to next int 3.1 -> 4, 3.99 -> 4

// console.log(Math.random() * 10 + 1);

let lower = 1;
let upper = 6;

let myRandom = Math.floor( Math.random() * (upper - lower + 1) + lower );

console.log(myRandom);


