/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/12.iteratorBasics.js]
SUB: Iterator Basics       
EX: 
===================*/

const arr = [1, 2, 3]

function  createIterator(collection) {
    let i = 0
    return{
        next(){
            return{
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}
let iterate = createIterator(arr)

// console.log(iterate.next()) // Object { done: false, value: 1 }
// console.log(iterate.next()) // Object { done: false, value: 2 }
// console.log(iterate.next()) // Object { done: false, value: 3 }
// console.log(iterate.next()) // Object { done: true, value: undefined }