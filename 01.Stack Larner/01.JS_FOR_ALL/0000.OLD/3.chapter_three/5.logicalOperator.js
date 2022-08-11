/*====================
5.Logical/Relational Operators
CMD: [ node 3.chapter_three/6.ternary.js ]
===================*/
// && || ! 

/*Logical/Relational Operators:[
    1. && AND
    2. || OR
    3. ! NOT
]; 
*/

//1. [ && AND]
    // A && B
    // true && true = true
    // true && false = false
    // false && true = false
    // false && false = false
    
//2.[ || OR]
    // A || B
    // true || true = true
    // true || false = true
    // false || true = true
    // false || false = false

//3.[! NOT]

/*========================= */
// 1. [ && AND]
var a = 'hello' && ''; // a = ''
var b = '' && []; // b = ''
var c = undefined && 0; // c = undefined
var d = 1 && 5; // d = 5
var e = 0 && {}; // e = 0
var f = 'hi' && [] && 'done'; // f = 'done'
var g = 'bye' && undefined && 'adios'; // g = undefined

/*========================= */
//2.[ || OR]
var a = 'hello' || ''; // a = 'hello'
var b = '' || []; // b = []
var c = '' || undefined; // c = undefined
var d = 1 || 5; // d = 1
var e = 0 || {}; // e = {}
var f = 0 || '' || 5; // f = 5
var g = '' || 'yay' || 'boo'; // g = 'yay'
/*========================= */

var a = 10
var b = 20
var c = 30 
var d = 40

//1. [ && AND]
if( a>b && c>d){
    console.log('A is greater than B AND C is greater than D')
}else{
    console.log('At last one condition is false')
}

//2.[ || OR]
if( a>b || c>b){
    console.log('A is greater than B OR C is greater than B')
}else{
    console.log('At last one condition is false')
}

//3.[! NOT]
var check = !(a > b);
console.log(check) // result [true]
var check = !!(a > b);
console.log(check) // result [false]


