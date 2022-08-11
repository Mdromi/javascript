/*====================
01. CHAPTER - 2
CMD: [ node 02.Chapter-2/2.2arrConstFact.js ]
SUB: Array Constructor vs Factory
EX: 
===================*/

// Constructor Pattern
const a1 = new Array(); // []
console.log(a1, a1.length); // [] 0

const a2 = new Array(5); 
console.log(a2, a2.length); // [ <5 empty items> ] 5

const a3 = new Array(1, 2, 3, 4, 5);
console.log(a3, a3.length) // [ 1, 2, 3, 4, 5 ] 5

// Factory Pattern

const b1 = Array(); // []
console.log(a1, a1.length); // [] 0

const b2 = Array(5); 
console.log(a2, a2.length); // [ <5 empty items> ] 5

const b3 = Array(1, 2, 3, 4, 5);
console.log(a3, a3.length) // [ 1, 2, 3, 4, 5 ] 5