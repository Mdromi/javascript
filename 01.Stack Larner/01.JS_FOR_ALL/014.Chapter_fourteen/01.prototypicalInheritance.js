/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/01.prototypicalInheritance.js]
SUB: First Prototypical Inheritance                             
EX: 
===================*/

function Shape(){

}
Shape.prototype = {
    common: function(){
        console.log('I am Common Method')
    }
}

function Square(width){
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
        console.log('Drawing')
}

var shape = new Shape()
var sqr = new Square(45)

// shape -> Shape -> Object
// sqr -> Square -> Object

// sqr -> Square -> Shape ->Object

function Circle(){
    // console.log('Circle')
}
Circle.prototype = Object.create(Shape.prototype)
var circle = new Circle()
