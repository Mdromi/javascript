/*====================
05. Objects
CMD: [ node 007.Chapter_seven/08.objectMethods.js ]
SUB: Object Methods
EX: 
===================*/

var obj = {
    x: 40,
    y: 60,
    z: 75
}

var obAraKey = Object.keys(obj);
var objAraVal = Object.values(obj);
var objEntry = Object.entries(obj);

// console.log(obAraKey); // [ 'x', 'y', 'z' ]
// console.log(objAraVal); // [ 40, 60, 75 ]
// console.log(objEntry); // [ [ 'x', 40 ], [ 'y', 60 ], [ 'z', 75 ] ]

var obj2 = Object.assign({}, obj);
obj2.x = 100;
console.log(obj); // { x: 40, y: 60, z: 75 }
console.log(obj2); // { x: 100, y: 60, z: 75 }