/*====================
12. Intro to Object Oriented
CMD: [ node 012.Chapter_twelve/index.js]
SUB: OOP                                 
EX: 
===================*/

/*=========================== 1
var rect = {
    width: 100,
    height: 50,

    draw: function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },

    printProperties: function(){
        console.log('My Width is: ', this.width)
        console.log('My Height is: ', this.height)
    }
}

rect.draw()
// rect.height = 100
// rect.draw()


// 
function myFunc(){
    console.log(this)
    rect.printProperties()
}

 //myFunc();
// new myFunc()

var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}
console.log(another.print)
another.print();

=========================== */


/*=========================== 2
// Factory Pattern
var createRect = function(width, height){
    return rect = {
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
            console.log(this)
        },
    
        printProperties: function(){
            console.log('My Width is: ', this.width)
            console.log('My Height is: ', this.height)
        }
    }
}

var rect1 = createRect(10, 5)
rect1.draw()

var rect2 = createRect(55, 7)
rect2.draw()
=========================== */

/*=========================== 3 */
// Constructor Pattern

var Rectangle = function(width, height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    }

    this.printProperties= function(){
        console.log('My Width is: ', this.width)
        console.log('My Height is: ', this.height)
    }
}

// var rect3 = new Rectangle(10, 8)
// rect3.draw();

/*=========================== 4 */
// 'New' Keyword

function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}
// var rect4 = myNew(Rectangle, 45, 30)
// rect4.draw();

/*=========================== 5 
// Constructor Property of a Constructor Function
// console.log(rect3.constructor)

var str = new String('str')
console.log(str.constructor)
=========================== */

/*=========================== 6 
// Function are Object

function test(){
    console.log('Something')
}
console.log(typeof test) // function
console.log(test.constructor) // [Function: Function]
console.log(test.name, test.length);

var Rect = new Function('width', 'height', `this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    }

    this.printProperties= function(){
        console.log('My Width is: ', this.width)
        console.log('My Height is: ', this.height)
    }`
)
var rect5 = new Rect(4, 5)
// console.log(rect5)
// rect5.draw();
=========================== */


/*=========================== 7
// Bind, Call, Apply

function myFunc(c, d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}
// myFunc()
// myFunc.call({}) // {}, NaN
// myFunc.apply({}) // {}, NaN

// myFunc.call({a: 40, b: 25}, 10, 5) // 65 + 15
// myFunc.apply({a: 40, b: 25}, [10, 5]) // 65 + 15

// var testBind = myFunc.bind({a: 40, b: 25}, 10, 5) // 65 + 15
var testBind = myFunc.bind({a: 40, b: 25}) // 65 
testBind(10, 5) // 80
=========================== */

/*=========================== 8 

// Pass By Value vs Pass By Reference

var n = 10

function change(n){
    n = n + 100
    console.log(n)
}
// change(n) // 110
// console.log(n) // 10

var obj = {
    a: 10,
    b: 20
}

function changeMe(obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}
changeMe(obj)
console.log(obj)

=========================== */

/*=========================== 9 */
// Abstraction | Hide Private Properties

var Rectangle = function(width, height){
    var name = 'MD Romi'

    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    var printProperties= function(){
        console.log('My Width is: ', this.width)
        console.log('My Height is: ', this.height)
    }.bind(this)

    this.getPosition = function(){
        return position
    }

    this.draw = function(){
        console.log('I am a rectangle')
        printProperties()
        console.log('Position: x = ', position.x, 'Or y = ', position.y)
    }

    Object.defineProperty(this, 'position', {
        get: function(){
            return position
        },
        set: function (value){
            position = value
        }
    })
}
var rect7 = new Rectangle(45, 30)
rect7.draw()
// console.log(rect7.getPosition())

rect7.position = {
    x: 456,
    y: -123
}
console.log(rect7.position)