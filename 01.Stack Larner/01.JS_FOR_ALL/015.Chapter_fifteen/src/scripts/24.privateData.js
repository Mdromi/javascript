/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/24.privateData.js]
SUB: Private Data With Symbol
EX: 
===================*/

const _radius = Symbol()
const _name = Symbol()
const _draw = Symbol()

class Circle{
    constructor(radius, name){
        this[_radius] = radius
        this[_name] = name
    }

    [_draw](){
        console.log('Drawing...')
    }
}

let c1 = new Circle(2, 'CRED')
console.log(c1)
console.log(c1.Circle)

let key = Object.getOwnPropertySymbols(c1)[0]
console.log(c1[key])