/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/04.context.js ]
SUB: Creation and Execution Context 
EX: 
===================*/

// Executional Phase
function a(){
    b()
    console.log('I am a Function A')
}

function b(){
    d()
    console.log('I am a Function B')
}

function c(){
    console.log('I am a Function C')
}

function d(){
    c()
    console.log('I am a Function D')
}

var x = 100;
a()
console.log('I am Global');

// Creational Phase
// Executional Phase
