/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/03.firstClass.js ]
SUB: First Class Function
EX: 
===================*/

// What is First Class Function?

/*
    1. A Function can be Stored in a Variable
    2. A Function can be Stored in an Array
    3. A Function can be Stored in an Object
    4. We can Create Function as Need
    5. We can Pass Function as an Arguments
    6. We can return Functions from Another Function
*/

function add(a, b)
{
    return a + b;
}

// 1. A Function can be Stored in a Variable
var sum = add;
// console.log(sum(4, 5)); // 9
// console.log(typeof sum) // function


// 2. A Function can be Stored in an Array
var arr = []
arr.push(add);
// console.log(arr); // [ [Function: add] ]
// console.log(arr[0](5, 3)) // 8


// 3. A Function can be Stored in an Object
var obj = {
    sum: add
}
// console.log(obj); // { sum: [Function: add] }
// console.log(obj.sum(7, 9)); // 16


// 4. We can Create Function as Need
setTimeout(function(){
    console.log('I have Created...')
}, 100)