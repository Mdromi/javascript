/*====================
CP: 03 JavaScript ES6
04. String Method
CMD: [ node 03.Chapter-3/4.string.js ]
EX: 
===================*/

const start = `My name is khan`;
console.log(start.startsWith(`My`)); // true

const end = `I love Programming`;
console.log(end.endsWith(`My`)); // false

const inc = `I love Programming with JavaScript`;
console.log(inc.includes(`with`)); // true

const rpt = `Hello World `;
console.log(rpt.repeat(5)); // repeat 5 

console.log(`I always want to say ${`Alhamdulillah `.repeat(5)}! `)
