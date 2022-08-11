/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/04.arrowFunctionThis.js]
SUB: Arrow Function & This                       
EX: 
===================*/

let add = (a, b) => a + b
// console.log(add(45, 50))

function testMe(){
    console.log(this)
}

// testMe()

let obj = {
    name: 'Md Romi',
    print: () =>{
        console.log(this)
    }
}

// obj.print()

let obj2 = {
    name: 'Md Romi',
    print: function(){
        console.log(this.name)
        setTimeout(function(){
            let self = this
            console.log(`Hello ${self.name}`)
        }.bind(this), 1000)
    }
}

// obj2.print()

let obj3 = {
    name: 'Md Romi',
    print: function(){
        console.log(this.name)
        setTimeout(() => {
            console.log(this)
            console.log(`Hello ${this.name}`)
        }, 1000)
    }
}

// obj3.print()