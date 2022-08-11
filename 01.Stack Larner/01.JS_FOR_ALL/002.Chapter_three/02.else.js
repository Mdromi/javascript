/*====================
02. else Conditions
CMD: [ node 002.Chapter_three/02.else.js ]
SUB: Conditions
EX: 
===================*/

var a = 10
var b = 20
var n =5
// a >b true false

//1
if(a > b){
    console.log(a + ' '+ 'is greater than'+' '+b)
}else{
    console.log(a + ' '+'is less than' +' ' +b)
}
//2
 n = n%2
if(n ==1){
    console.log(n +' is odd Number') // returns all time [1]
}else{
    console.log( n +' is Even Number')
}
//3
var q = 10
if(q%2 ==0){
    console.log( q +' is Even Number')
}else{
    console.log( q +' is odd Number')
}

//4
var i = 0
if (i < 1) {
    console.log("i is smaller than 1");
    } else {
    if (i < 2) {
    console.log("i is smaller than 2");
    } else {
    console.log("none of the previous conditions was true");
    }
}