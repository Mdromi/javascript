/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/07.hosting.js ]
SUB: Hosting in JavaScript
EX: 
===================*/

var a = 100
// newPrint(a);

print(10)

var newPrint = print;
newPrint(45);

function print(a){
    console.log(a)
}

print(a);

// Creational Phase
    // a = undefined
    // newPrint = undefined
    // print = ref
// Executional Phase
    // a = 100
    // newPrint = Error
    // print = 10
    // newPrint = ref
    // newPrint = 45
    // print(a) = 100