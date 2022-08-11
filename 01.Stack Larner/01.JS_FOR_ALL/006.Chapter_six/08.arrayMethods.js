/*====================
05. Arrays
CMD: [ node 006.Chapter_six/08.arrayMethods.js ]
SUB: Array Methods
EX: 
===================*/

var arr = [4, 5, 9, 6];
var arr2 = [5, 10, 45, 23];

// console.log(arr);
console.log(arr.join(' | ')); // 4 | 5 | 9 | 6

// arr.fill();
// console.log(arr.fill(true)); // [ 0, 0, 0, 0 ] || [ true, true, true, true ]

var arr3 = arr.concat(arr2);
// console.log(arr3); // [4,  5,  9,  6, 5, 10, 45, 23]

// console.log(Array.isArray(arr)) // true

var arr4 = Array.from(arr);
console.log(arr4); // [ 4, 5, 9, 6 ]