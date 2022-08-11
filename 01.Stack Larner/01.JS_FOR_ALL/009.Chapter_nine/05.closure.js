/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/05.closure.js ]
SUB: Closure First Look
EX: 
===================*/

// First Look at Closure

var b = 10

function a()
{
    console.log(b) // 10
    var x = 20
    return function(){
        console.log(x);
    }
}

var abc = a();
console.dir(abc);