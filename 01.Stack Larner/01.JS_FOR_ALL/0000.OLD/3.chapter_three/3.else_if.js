/*====================
3.else_if.js
CMD: [ node 3.chapter_three/6.ternary.js ]
===================*/
var a = 10
var b = 20
var n = 5
// a >b true false

//1
if(a > b){
    console.log('  A is greater than B')
}else if (a < b){
    console.log('  A is less than B')
}else{
    console.log(' They Both are same')
}
//2
 n = n%2
if(n ==1){
    console.log(n +' n is odd Number') // returns all time [1]
}else{
    console.log( n +' is Even Number')
}
//3
var q = 1
if (q == 0){
    console.log( q +' is Zero Number')
}else if(q%2 ==0){
    console.log( q +' is Even Number')
}else{
    console.log( q +' is odd Number')
}

//4
var clsPoint = 100

if(clsPoint > 100){
    console.log(" Sorry! it's not corect number.. Please Include a valid number/")
}else if(clsPoint >= 80){
    console.log('Congratulation! Your Letter Grate A+ or Grade point 5.0')
}else if(clsPoint >= 70){
    console.log('Congratulation! Your Letter Grate A or Grade point 4.0')
}else if(clsPoint >= 60){
    console.log('Congratulation! Your Letter Grate A- or Grade point 3.5')
}else if(clsPoint >= 50){
    console.log(' Your Letter Grate B or Grade point 3.0')
}else if(clsPoint >= 40){
    console.log(' Your Letter Grate C or Grade point 2.0')
}else if(clsPoint >= 33){
    console.log(' Your Letter Grate D or Grade point 1.0')
}else{
     console.log(' Sorry,You are fail!...')
}

//5
var whatDay = 'SunDay'
if(whatDay === 'Saturday'){
    console.log(' It is closed Today')
}else if(whatDay === 'Thursday'){
    console.log(' It is partially closed')
}else if(whatDay === 'FriDay'){
    console.log(' Some offices are closed Today')
}else{
    console.log(' It normal working day Today')
}
