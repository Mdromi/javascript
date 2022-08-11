/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/18.weakSet.js]
SUB: WeakSet in JavaScript   
EX: 
===================*/

let a = {a: 10}, b = {b: 20}
let set = new Set([a, b])

// a = null
// console.log(set)

let arr = [...set]
// console.log(arr[0])

let weakSet = new WeakSet([a, b])
a = null
// console.log(weakSet)
// console.log(weakSet.has(a)) // false 