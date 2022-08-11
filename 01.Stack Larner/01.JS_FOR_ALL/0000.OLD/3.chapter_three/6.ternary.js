/*====================
6.Ternary Operators
CMD: [ node 3.chapter_three/6.ternary.js ]
===================*/
//Condition ? true side : False Side 

//1
var n = 10 
var str = ''
if(n % 2 == 0){
    str = 'EVEN'
}else {
    str = 'ODD'
}
console.log(str)
//Defult Easy Code
var result = n%2 == 0 ? 'EVEN' : 'ODD'
console.log(result)

//3
var animal = 'kitty';
var result = '';

if (animal === 'kitty') {
    result = 'cute';
} else {
    result = 'still nice';
}
//Defult Easy Code
var result = (animal === 'kitty') ? 'cute' : 'still nice';

//3
var a = 0;
var str = 'not a';
var b = '';
b = a === 0 ? (a = 1, str += ' test') : (a = 2);
//console.log(a) // result[1]
console.log(b) // result[not a test]
//console.log(str) // result[not a test]

//4
// var a = 1;
// a === 1 ? alert('Hey, it is 1!') : alert('Weird, what could it be?');
// Defult Easy Code
// if (a === 1) alert('Hey, it is 1!') else alert('Weird, what could it be?');

//5
/*
var animal = 'kitty';
for (var i = 0; i < 5; ++i) {
(animal === 'kitty') ? break : console.log(i);
}
*/

//6
/*
var animal = 'kitty';
(animal === 'kitty') ? return 'meow' : return 'woof';
*/

//7
var animal = 'kitty';
return (animal === 'kitty') ? 'meow' : 'woof';

let x = 20;

for(let i = 0; i < 20; i++){
  x = x + 2
}
console.log(i)