/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/05.variableObject.js ]
SUB: Variable Object Creation
EX: 
===================*/

var a = 10;
var b;


console.log(a) // 10
console.log(b) // undefined

b = 20
console.log(b) // 20

console.log(c) //undefined
var c = 50
console.log(c) // 50

// Creational Phase
    // a = undefined
    // b = undefined
    // c = undefined
// Executional Phase
    // a = 10
    // b = 20
    // c = 