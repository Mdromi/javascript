/*====================
CP: 02 JavaScript Advance
00. This
CMD: [ node 02.Chapter-2/00.this.js ]
EX: 
===================*/

// 1st Roles - Global Context Roles

// console.log(this)
// console.log(this == window) // true

function helloThis(){
    console.log(this)
};
// helloThis()

function helloThis2(){
    'use strict';
    console.log(this);
};
// helloThis2() // undefined

function unNamed(){
    this.name = 'Md Romi'
}
unNamed()
// console.log(name) // Md Romi


// 2nd Roles - Objects Roles

var myCustomObj = {
    name: 'Md Romi',
    age: 19,
    job: 'Student',
    msg: function(){
        console.log(this)
    },
    anotherObj: {
        name: 'Romi MD',
        msg: function(){
            // console.log(this) // {name: 'Romi MD', msg: ƒ}
            console.log(`My name is: ` + this.name)
        }
    }
}

// myCustomObj.msg();
// myCustomObj.anotherObj.msg() // My name is: Romi MD

// myCustomObj.anotherObj.value.call(myCustomObj)
// myCustomObj.msg()


// 3rd Roles - Spoct Roles
var myCustomObj2 = {
    name: 'Md Romi',
    age: 19,
    job: 'Student',
    anotherObj: {
        name: 'Romi MD',
        value: function(){
            console.log(this) // {name: 'Romi MD', msg: ƒ}
        }
    }
}
// myCustomObj2.anotherObj.value() // {name: 'Romi MD', value: ƒ}
// myCustomObj2.anotherObj.value.call(myCustomObj2) // {name: 'Md Romi', age: 19, job: 'Student', anotherObj: {…}}

// 4th Roles - new keyword Roles