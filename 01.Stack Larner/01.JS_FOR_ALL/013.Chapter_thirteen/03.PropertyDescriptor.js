/*====================
13. Prototype
CMD: [ node 013.Chapter_thirteen/03.PropertyDescriptor.js]
SUB: Property Descriptor                                
EX: 
===================*/

var person = {
    name: 'Md Romi'
}
// console.log(person)

person.toString() // "[object Object]"

for(var i in person){
    // console.log(i) // name
}

// console.log(Object.keys(person))

var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let newDescriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(newDescriptor)

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'Romi'
})

for(var i in person){
    console.log(i) // undefined
}