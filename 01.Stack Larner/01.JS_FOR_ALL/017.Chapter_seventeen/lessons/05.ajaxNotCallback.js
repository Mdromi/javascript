/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/05.ajaxNotCallback.js]
SUB: Callback Not Always Asynchronous    
EX: 
===================*/

let arr = [1, 2, 3, 4]

let sqrArr = arr.map(v => v * v)
console.log(sqrArr)

// function asyncMap(arr, cb){
//     return arr.map(v => {
//         setTimeout(cb, 0)
//     })
// }

// let qbArr = asyncMap(arr, v => v * v * v)
// console.log(qbArr)

function asyncMap(arr, cb){
    return arr.map(v => {
        // setTimeout(cb.bind(null, v), 0)
        setTimeout( () => cb(v), 0)
    })
}

let qbArr = asyncMap(arr, v => {
    console.log(v)
})
console.log(qbArr)