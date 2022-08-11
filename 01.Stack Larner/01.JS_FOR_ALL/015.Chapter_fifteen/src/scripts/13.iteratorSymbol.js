/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/13.iteratorSymbol.js]
SUB: Iterator With Symbol      
EX: 
===================*/

const arr = [1, 2, 3]

// console.log(arr[Symbol.iterator])
// console.log('str'[Symbol.iterator])

let iterate = arr[Symbol.iterator]()

// console.log(iterate.next()) // Object { done: false, value: 1 }
// console.log(iterate.next()) // Object { done: false, value: 2 }
// console.log(iterate.next()) // Object { done: false, value: 3 }
// console.log(iterate.next()) // Object { done: true, value: undefined }

let str = 'TEXT'
let iterateText = str[Symbol.iterator]()

// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

