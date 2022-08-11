/*====================
05. Objects
CMD: [ node 007.Chapter_seven/03.accessingProperties.js ]
SUB: Accessing Object Properties
EX: 
===================*/

var point = {
    x: 10,
    y: 20,
    z: 15,
}

// DOT NOTASION
// console.log(point.x); // 10
// console.log(point.y); // 20
// console.log(point.x + point.y); // 30

//ARRAY NOTASAION
console.log(point['x']); // 10
console.log(point['y']); // 20
console.log(point['x'] + point['y']); // 30

var show = 'x';
console.log(point.show) // undefined
console.log(point[show]) // 10
