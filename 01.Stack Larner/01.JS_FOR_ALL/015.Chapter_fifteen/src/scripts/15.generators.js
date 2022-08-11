/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/15.generators.js]
SUB: Generators   
EX: 
===================*/

let arr = [1, 2, 3]

let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function* () {
        let currentValue = this.start
        while (currentValue <= this.end) {
            yield currentValue++
        }
    }
}

let generators = obj[Symbol.iterator]()

// console.log(generators.next()) // { value: 1, done: false }
// console.log(generators.next()) // { value: 2, done: false }
// console.log(generators.next()) // { value: 3, done: false }
// console.log(generators.next()) // { value: 4, done: false }
// console.log(generators.next()) // { value: 5, done: false }
// console.log(generators.next()) // { value: undefined, done: true }

function* generate(){
    yield 1
    yield 2
    yield 3
}

function* generate2(collection){
    for(let i = 0; i < collection.length; i++)
    {
        yield collection[i]
    }
} 

// let it = generate()
let it = generate2(arr)

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())