/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/03.callingSuperMethod.js]
SUB: Calling Super With Call Method                             
EX: 
===================*/

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
    console.log('I am Common Method')
}


function Square(width, color){
    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function(){
    console.log('Drawing')
}

var sqr = new Square(45, 'Green')