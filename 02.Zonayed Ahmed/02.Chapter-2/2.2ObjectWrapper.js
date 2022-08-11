/*====================
CP: 02 JavaScript Advance
02. Object
CMD: [ node 02.Chapter-2/2.2ObjectWrapper.js ]
EX: 
===================*/
var str = `My Name is Md Romi`
console.log(str)
console.log(str.length)

var str2 = new String('My Name is Md Romi');
console.log(str2)

var num = new Number(10)
console.dir(num)

var bool = new Boolean(true)
console.dir(bool)

console.log(new String(str).length)