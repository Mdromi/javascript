/*====================
07. logical And Or
CMD: [ node 002.Chapter_three/07.logicalAndOr.js ]
SUB: Operator
EX: 
===================*/

var name = ''
var myName = ''
var myFirstName = ' ' 

//1
if(myName.length == 0){
    myFirstName = 'Md Romi' 
} else{
    myFirstName = name 
}
console.log(myFirstName.length) // result [7]

//2
var fullName = name || 'MD Romi'
console.log(fullName)

//3
var isOk = true
if(isOk){
    console.log('Everything is Ok')
}
isOk && console.log('Everything is Ok')