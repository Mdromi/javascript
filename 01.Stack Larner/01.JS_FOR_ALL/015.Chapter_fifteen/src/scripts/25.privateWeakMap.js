/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/25.privateWeakMap.js]
SUB: Private Properties With WeakMap
EX: 
===================*/

const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle{
    constructor(radius, name){
        _radius.set(this, radius)
        _name.set(this, name)
        _resize.set(this, () =>{
            console.log(this.size)
        })
    }

    draw(){
        console.log('Drawing...')
        console.log(_radius.get(this),_name.get(this))
        _resize.get(this)()
    }
}

let c1 = new Circle(2, 'CRED')
c1.draw()