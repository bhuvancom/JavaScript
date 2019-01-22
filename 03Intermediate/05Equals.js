// === vs ==
 // == checks value , === checks reference
console.log(2 == 3);
console.log(2 === 2.0); 
 
let myVar = {}
let myVar2 = {}

console.log(myVar === myVar2); // object are diff false
myVar = myVar2 // pointing to same object
console.log(myVar == myVar2); // true


