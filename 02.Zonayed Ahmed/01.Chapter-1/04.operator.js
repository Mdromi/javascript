/*====================
03. Operator
CMD: [ node 01.Chapter-1/04.operator.js ]
EX: 
===================*/

var a = 10
var b = 20
var c = (a - b) / (a * b) / (a / b) / (a % b); // (a - b) / (a * b) / (a / b) / (a % b)

console.log(c);

console.log(++c);
console.log(--c);


//Comperision operator
// console.log(a == b); //false
// console.log(a != b); //true
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a >= b); //false
// console.log(a <= b); //true
// console.log(10 === '10'); //false

//Logical Operator
// console.log(true && true); //true
// console.log(true && false); //false
// console.log((10 < 20) && (20 < 30)); //true
// console.log((10 < 20) && (10 > 20)); //false
// console.log(true && true && true && false && true); //false

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || false); //false
// console.log((10 < 20) || (10 > 20)); //true
// console.log((10 > 20) || (20 > 30)); //false

// console.log(!true); //false
// console.log(!false); //true
// console.log(!(10 > 20)); //true
// console.log(!(10 < 20)); //false


//Asigment Operator
// console.log(a += 10); // return 20 | (a = a + 10)
// console.log(a -= 10); // return 10 | (a = a - 10)
// console.log(a *= 10); // return 100 | (a = a * 10)
// console.log(a /= 10); // return 10 | (a = a / 10)
// console.log(a %= 10); // return 0 | (a = a % 10)

//Ternary Operator
a = 10;
b = 20;
c = a > b ? 100 : 200;
console.log(c); // return 200

//Another Operator
console.log(typeof(c)); // return number

