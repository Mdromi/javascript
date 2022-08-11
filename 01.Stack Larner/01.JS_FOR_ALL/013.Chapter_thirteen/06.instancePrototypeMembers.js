/*====================
13. Prototype
CMD: [ node 013.Chapter_thirteen/06.instancePrototypeMembers.js]
SUB: Using Instance vs Prototype Members                              
EX: 
===================*/

function Square(width){
    this.width = width

    // this.draw = function(){
    //     console.log('Draw')
    // }

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