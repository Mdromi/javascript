/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/19.weakMap.js]
SUB: WeakMap in JavaScript  
EX: 
===================*/

let a = {a: 10}, b = {b: 20}

let weakMap = new WeakMap([[a, 45], [b, 75]])
// console.log(weakMap)

a = null
// console.log(weakMap.get(a)) // undefined
// console.log(weakMap.has(a)) // false
// console.log(weakMap.has(b)) // true