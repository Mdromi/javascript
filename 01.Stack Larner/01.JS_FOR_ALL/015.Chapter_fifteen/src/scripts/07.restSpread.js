/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/07.restSpread.js]
SUB: Rest & Spread Operator                   
EX: 
===================*/

function sum(){
    let sum = 0

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }

    return sum
}

// console.log(sum(1, 2, 3, 4, 5))

function sum2(...rest){
    // console.log(rest) // return array
    return rest.reduce((a, b) => a + b)
}

// console.log(sum2(1, 2, 3, 4, 5))

let a = [1, 2, 3]
// console.log(...a) // 1 2 3

let obj = {
    a: 10,
    b: 20,
    c: 30
}

// let obj2 = {
//     ...obj
// }
// console.log(obj2)