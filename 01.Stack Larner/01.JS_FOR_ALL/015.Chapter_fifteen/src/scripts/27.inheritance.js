/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/27.inheritance.js]
SUB: Inheritance in ES6 
EX: 
===================*/
class Shape{
    constructor(color){
        this.color = color
    }

    draw(){
        console.log("Drawing......")
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color)
        this.width = width
        this.height = height
    }

    calculate(){
        return this.width + this.height
    }
}

let r = new Rectangle('Green', 4, 5)
console.log(r)
r.draw()