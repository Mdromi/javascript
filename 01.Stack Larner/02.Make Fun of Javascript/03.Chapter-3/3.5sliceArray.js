/*====================
01. CHAPTER - 2
CMD: [ node 03.Chapter-3/3.5sliceArray.js ]
SUB: Slice Array into Multiple Arrays
EX: 
===================*/

const arr = [1, 2, 3, 4, 5, 6]

// Slice
const sliced = arr.slice(1, 3);
console.log(sliced);

// Clone Array
const cloned = arr.slice();
console.log(cloned == arr); // false

// Array Like Objects to Array
function toArray(){
    return Array.prototype.slice.call(arguments);
} 
const argArray = toArray(4, 2, 7, 9, 'test');
console.log(argArray);
console.log(argArray.__proto__.constructor);