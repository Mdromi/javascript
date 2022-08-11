/*====================
13. Prototype
CMD: [ node 013.Chapter_thirteen/07.IterateObjectHasOwnProperty.js]
SUB: Iterate Object vs HasOwnProperty                              
EX: 
===================*/

function Square(width){
    this.width = width

    this.getWidth = function(){
        console.log('Width is ' + this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        this.getWidth()
        console.log('Draw')
    },
    toString: function(){
        return 'My Width is: ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(sqr1.hasOwnProperty('width')) // true
// console.log(sqr1.hasOwnProperty('getWidth')) // true

// console.log(sqr1.hasOwnProperty('draw')) // false

// console.log(Object.keys(sqr1)) // [ 'width', 'getWidth' ]
for(var i in sqr1){
    // console.log(i)
}