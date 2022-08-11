/*====================
7.logical And Or Operators
CMD: [ node 3.chapter_three/7.logicalAndOr.js ]
===================*/
//7.logicalAndOr.js

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