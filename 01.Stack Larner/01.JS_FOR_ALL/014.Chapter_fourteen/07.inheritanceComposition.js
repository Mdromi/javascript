/*====================
14. Prototypical Inheritance
CMD: [ node 014.Chapter_fourteen/07.inheritanceComposition.js]
SUB: Inheritance & Composition Mixing                            
EX: 
===================*/

function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function(){
        console.log('Walking...')
    }
}

var canEat = {
    eat: function(){
        console.log('Eating...')
    }
}

var canSwim = {
    swim: function(){
        console.log('Swiming...')
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.nane = 'MD Romi'

function Person(name){
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)

mixin(Person.prototype, canWalk, canEat)

var person = new Person('MD Romi')
console.log(person)

function GoldFish(name){
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('bla bla bla')
console.log(fish)