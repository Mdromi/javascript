/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/06.polymorphism.js]
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

Square.prototype.common = function(){
    console.log('I am Calling From Square and I have Overridden')
}
function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}
extend(Shape, Circle)

var circle = new Circle(5, 'red')

var sqr = new Square(45, 'Green')

Circle.prototype.common = function(){
    // Shape.prototype.common.call(this)
    console.log('I am Calling From Circle and I have Overridden')
}

var circle2 = new Circle(5, 'red')

var s = new Shape('Pirple')


var shapes = [s, circle2, sqr]
for(var i of shapes){
    // i.common()
}

var a = {}
// console.log(a instanceof Circle) // false
// console.log(a instanceof Object) // true
// console.log(circle instanceof Circle) // true
// console.log(circle instanceof Shape) // true
// console.log(circle instanceof Square) // false
// console.log(sqr instanceof Square) // true
// console.log(sqr instanceof Shape) // true