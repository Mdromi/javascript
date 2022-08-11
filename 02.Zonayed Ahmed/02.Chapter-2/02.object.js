/*====================
CP: 02 JavaScript Advance
02. Object
CMD: [ node 02.Chapter-2/02.object.js ]
EX: 
===================*/

// Primitive DataType
// var a = 10, b = 20
// console.log(`Before swap: Value of a: ` + a + ` and value of b: ` + b);

// function swap(a, b){
//     console.log(`Before swap inside function: value of a: ` + a + ` and value of b: ` + b)
//     var temp = a;
//     a = b
//     b = temp
//     console.log(`After swap inside function: value of a: ` + a + ` and value of b: ` + b)
// }

// swap(a, b)
// console.log(`After swap: Value of a: ` + a + ` and value of b: ` + b);

// Non - Primitive DataType
var obj = {
    a: 10,
    b: 20
}
console.log(`Before swap: Value of a: ` + obj.a + ` and value of b: ` + obj.b);

function swap(x){
    console.log(`Before swap inside function: value of a: ` + x.a + ` and value of b: ` + x.b)
    var temp = x.a;
    x.a = x.b
    x.b = temp
    console.log(`After swap inside function: value of a: ` + x.a + ` and value of b: ` + x.b)
}

swap(obj)
console.log(`After swap: Value of a: ` + obj.a + ` and value of b: ` + obj.b);