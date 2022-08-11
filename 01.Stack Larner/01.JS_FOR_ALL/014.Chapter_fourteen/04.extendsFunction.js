/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/04.extendsFunction.js]
SUB: Calling Super With Call Method                             
EX: 
===================*/

function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

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

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

extend(Shape, Square)

Square.prototype.draw = function(){
    console.log('Drawing')
}

function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}
extend(Shape, Circle)

var circle = new Circle(5, 'red')

var sqr = new Square(45, 'Green')