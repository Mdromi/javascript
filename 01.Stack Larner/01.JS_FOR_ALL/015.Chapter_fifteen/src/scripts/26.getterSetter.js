/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/26.getterSetter.js]
SUB: Getter & Setter in ES6
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

    get radius(){
        return _radius.get(this)
    }

    set radius(v){
        _radius.set(this, v)
    }

    draw(){
        console.log('Drawing...')
        console.log(_radius.get(this),_name.get(this))
        _resize.get(this)()
    }
}

let c1 = new Circle(2, 'CRED')
c1.draw()
c1.radius = 100
console.log(c1.radius)