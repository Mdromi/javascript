/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/09.scope.js ]
SUB: Scope
EX: 
===================*/

var x = 50;

function test(){
    var x = 10
    console.log(x)
}

test()
console.log(x)