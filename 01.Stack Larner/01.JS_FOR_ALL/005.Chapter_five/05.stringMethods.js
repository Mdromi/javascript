/*====================
05. String
CMD: [ node 005.Chapter_five/05.stringMethods.js ]
SUB: String Methods
EX: 
===================*/

//Concat
var  a = 'I am'
var b = 'Md Romi'

var c = a.concat(' ', b);
// console.log(c); // I am Md Romi

var d = c.substring(8) // charecter 8 -> length
// console.log(d); //Romi

var d = c.substr(8, 2)
console.log(d); //Ro

console.log(c.charAt(3)); // m
console.log(c.startsWith('I')); //true
console.log(c.endsWith('Romi')); // true
console.log(a.toUpperCase()); // I AM
console.log(b.toLowerCase()); // md romi
console.log('       Romi        '.trim()); // Romi  | Removing Default Space
console.log(c.split(' ')) // [ 'I', 'am', 'Md', 'Romi' ]
