/*====================
05. Objects
CMD: [ node 007.Chapter_seven/05.removeProperties.js ]
SUB: Remove Object Properties
EX: 
===================*/

var point = {
    x: 10,
    y: 20,
    z: 15,
}

point.x = 45;
point.a = 15;
//console.log(point);

point['y'] = 100;
var prop = 'z'
point[prop] = 55;
console.log(point); // { x: 45, y: 100, z: 55, a: 15 }

point.a = undefined;
console.log(point); //{ x: 45, y: 100, z: 55, a: undefined }

delete point.a;
console.log(point); // { x: 45, y: 100, z: 55 }