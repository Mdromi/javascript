/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/08.enhanceObject.js]
SUB: Enhance Object                 
EX: 
===================*/

let a = 10, b = 20

let obj = {
    a,
    b,
    print(){
        console.log(this)
    }
}

// console.log(obj)
// obj.print()