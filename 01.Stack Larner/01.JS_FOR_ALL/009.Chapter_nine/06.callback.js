/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/06.callback.js ]
SUB: Callback Function
EX: 
===================*/

//1
function sample(a, b, cb){
    var c = a + b;
    var d = a - b;
    var result = cb(c, d);

    return result;
}

function sum(a, b){
    return a + b;
}

var result = sample(5, 8, sum);
console.log(result); // 10

// 2
var result2 = sample(5, 8, function(a, b){
    return a - b;
});

console.log(result2); //16

//3
var result3 = sample(5, 8, function(a, b){
    return a * b;
});
console.log(result3); // -39