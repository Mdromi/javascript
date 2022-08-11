/*====================
13. Prototype
CMD: [ node 013.Chapter_thirteen/04.constructorPrototype.js]
SUB: Constructor Prototype                                
EX: 
===================*/

function Person(name){
    this.name = name
}

Person.prototype.PI = 3.1416

var p1 = new Person('MD Romi')
var p2 = new Person('Romi')

// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)
// console.log(Object.getPrototypeOf(p1) === Person.prototype) // true 

// console.log(p1)
// console.log(p2)