/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/13.closure.js ]
SUB: Closure
EX: 
===================*/
// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

//1
// function test(){
//     var msg = 'I am Learning Lexical Scope and Closure'

//     function sayMsg(){
//         console.log(msg)
//     }

//     sayMsg();
// }

// test();

// 2
function test(){
    var msg = 'I am Learning Lexical Scope and Closure'

    return function (){
        console.log(msg)
    }

}

var sayMsg = test();
// console.log(sayMsg); // [Function (anonymous)]
sayMsg()