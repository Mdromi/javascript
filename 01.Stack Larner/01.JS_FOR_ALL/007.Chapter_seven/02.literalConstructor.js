/*====================
05. Objects
CMD: [ node 007.Chapter_seven/02.literalConstructor.js ]
SUB: Object Literal vs Constructor
EX: 
===================*/

/*----------------
Object Literal
-----------------*/
var obj = {};

// console.log(typeof obj); // object
// obj.propartyes = value

// obj.x = 10;
// console.log(obj); // { x: 10 }

var point = {
    x: 10,
    y: 20,
}
// point.y = 30
point.z = 30;
console.log(point); // { x: 10, y: 20, z: 30 }

/*----------------
Object Constructor
-----------------*/
var obj = Object();
obj.a = 10;
obj.b = 20;
obj.c = 30;

console.log(obj); // { a: 10, b: 20, c: 30 }

var obj2 = new Object();
obj2.p = 10;
obj2.q = 20;
obj2.r = 30;
console.log(obj2); // { p: 10, q: 20, r: 30 }