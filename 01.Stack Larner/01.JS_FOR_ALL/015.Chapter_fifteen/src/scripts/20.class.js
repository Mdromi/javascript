/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/20.class.js]
SUB: Class in JavaScript 
EX: 
===================*/

function Reactangle(width, height) {
    this.width = width
    this.height = height
}

Reactangle.prototype.draw = function(){
    console.log(this);
    console.log('Drawing.......');
}

let rect1 = new Reactangle(12, 15)
// console.log(rect1);

class Reactangle2{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    draw(){
        console.log('Drawing.......');
    }
}

let rect2 = new Reactangle2(12, 15)
// console.log(rect2);
// console.log(typeof Reactangle) // function