/*====================
1.if.js
CMD: [ node 3.chapter_three/6.ternary.js ]
===================*/
var a = 10
var b = 20
var n =6
// a >b true false

//1
if(a > b){
    console.log(a + ' '+ 'is greater than'+' '+b)
}else{
    console.log(a + ' '+'is less than' +' ' +b)
}
//2
 n = n%2
if(n == 1){
    console.log(n +' is odd Number') // returns all time [1]
}
if(n ==0){
    console.log( n +' is Even Number')
}
//3
var q = 10
if(q%2 ==0){
    console.log( q +' is Even Number')
}
if(q%2 ==1){
    console.log( q +' is odd Number')
}

//4
var myName = 'Md Romi'
if(myName === 'Md Romi'){
    console.log('Yes ! My Name is MD Romi')
}
