/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/16.set.js]
SUB: Set in JavaScript   
EX: 
===================*/

// let set = new Set([1, 2, 3])

let set = new Set([1, 2, 3])
set.add(5)
set.add(6)
set.add(1)
set.add(2)

// set.clear()
// set.delete(5)
// console.log(set.has(5)) // true
// console.log(set.keys())
// console.log(set.value())

// console.log(set)
// console.log(set.size)

// let keyIterate = set.keys()

// let keyIterate = set.values()
// console.log(keyIterate.next())

function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}

// console.log(isIterable(set)) // true

for(let v of set){
    // console.log(v)
}

// console.log(set.entries())