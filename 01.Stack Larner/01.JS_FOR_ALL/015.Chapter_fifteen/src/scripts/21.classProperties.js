/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/21.classProperties.js]
SUB: Class in JavaScript 
EX: 
===================*/

class Reactangle{
    constructor(width, height){
        this.width = width
        this.height = height
        this.another = function(){

        }
    }
    name = 'MD Romi'
    test2 = function(){

    }

    draw(){
        console.log('Drawing.......');
    }

    test(){

    }
}

let rect = new Reactangle(12, 15)
// console.log(rect);
// console.log(typeof Reactangle) // function