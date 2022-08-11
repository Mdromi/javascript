/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/11.symbols.js]
SUB: Symbols in JavaScript        
EX: 
===================*/

let s1 = Symbol()
let s2 = Symbol('test symbol')

// console.log(s1) // Symbol()
// console.log(s2) // Symbol("test symbol")

// console.log(s1 === s2) // false

let toss = {
    HEAD: Symbol('HEAD'),
    TAIL: Symbol('TAIL')
}