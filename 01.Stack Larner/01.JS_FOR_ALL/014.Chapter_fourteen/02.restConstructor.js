/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/02.restConstructor.js]
SUB: Rest Constructor After Inheritance                             
EX: 
===================*/

function Shape(){

}
Shape.prototype.common = function(){
    console.log('I am Common Method')
}


function Square(width){
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = 

Square.prototype.draw = function(){
    console.log('Drawing')
}



var shape = new Shape()
var sqr = new Square(45)