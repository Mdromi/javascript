/*====================
08. Functions
CMD: [ node 008.Chapter_eight/07.functionExpression.js ]
SUB: Function Expression
EX: 
===================*/

//Anominas Function
var addition = function (a, b)
{
    return a + b;
}

var result = addition(10, 40);
console.log(result);

setTimeout(function() {
    console.log('I will call after 5 second');
} ,5000)

var another = addition;
console.log(another(7, 5));