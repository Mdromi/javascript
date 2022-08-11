/*====================
05. String
CMD: [ node 005.Chapter_five/02.stringLiteral.js ]
SUB: String Literal vs Constructor 
EX: 
===================*/

// 'string' "string"
// ['s', 't', 'r', 'i', 'n', 'g']

var str = 'Something' // String Literal
var str2  = String('Something'); // String Constructor
console.log(str2);

//2
var n = 10;
var str = n ;  // 10
var str = n + ''; // '10'
var str = n.toString() // '10'
str = String(n); //'10'
console.log(str);