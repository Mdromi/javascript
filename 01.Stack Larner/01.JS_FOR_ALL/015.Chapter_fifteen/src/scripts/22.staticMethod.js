/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/22.staticMethod.js]
SUB: Static Method
EX: 
===================*/

class Person{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    print(){
        console.log(this.name, this.email)
    }

    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str = '{"name": "MD Romi", "email": "mdromi123@gmail.com"}'

let p1 = Person.create(str)

// console.log(p1)
// console.log(p1 instanceof Person) // true 
// p1.print() // MD Romi mdromi123@gmail.com