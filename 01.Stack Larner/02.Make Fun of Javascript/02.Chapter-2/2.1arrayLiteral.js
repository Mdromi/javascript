/*====================
01. CHAPTER - 2
CMD: [ node 02.Chapter-2/2.1arrayLiteral.js ]
SUB: Array Literal
EX: 
===================*/

// Array Literal
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;
console.log(arr.length)
console.log(arr)

// Length = LastIndex + 1
// LastIndex = Length - 1

const names = [
    'MD Romi',
    'Rakib',
    'Siam',
    'Akhabar',
    'Omor',
    'Mehadi Hasan'
]
names[names.length] = 'Omit'
console.log(names)