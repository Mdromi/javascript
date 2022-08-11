/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/10.objectEntries.js]
SUB: Object From Entries            
EX: 
===================*/

var obj = {
    a: 10,
    b: 20
}
// console.log(Object.entries(obj))

var objArr = [
    ['a', 10],
    ['b', 20]
]
// console.log(Object.fromEntries(objArr))