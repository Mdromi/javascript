/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/29.ModulesSystem/src/29.modulesSystem.js]
SUB: Method Overriding in ES6
EX: 
===================*/

// import Rectangle from './Rectangle'

// let r = new Rectangle('Green', 4, 5)
// console.log(r)
// r.draw()

// import * as func from './func'
// console.log(func)

import {add, div} from './func'
console.log(add(45, 10))
console.log(div(45, 10))