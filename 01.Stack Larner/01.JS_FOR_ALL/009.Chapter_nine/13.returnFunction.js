/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/13.returnFunction.js ]
SUB: Return Function From Another Function
EX: 
===================*/
// 1
// function greet(msg){
//     function greetings(name){
//         return msg + ', ' + name + '!' 
//     }
//     return greetings;
// }

// var gm = greet('Good Morning')
// // console.log(typeof gm);
// console.log(gm); // [Function: greetings]

// var msg = gm('MD Romi')
// console.log(msg); // Good Morning, MD Romi!

// var gn = greet('Good Night');
// var hello = greet('Hello');
// console.log(gn('Twinkle Cats')); // Good Night, Twinkle Cats!
// console.log(hello('VP Romi')); // Hello, VP Romi!

function base(b){

    return function(n){
        var result = 1;
        for(var i = 0; i < b; i++){
            result *= n;
        }
        return result;
    }
}

var base10 = base(10) 
console.log(base10(2)) 

var base5 = base(5);
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));

