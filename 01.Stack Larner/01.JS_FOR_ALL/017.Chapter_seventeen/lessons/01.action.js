/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/01.action.js]
SUB: Asynchronous Programming Action          
EX: 
===================*/

console.log('I am line One') // 1st
setTimeout(() =>  {
    console.log('I am line Two')
}, 3000) // 4th

setTimeout(() =>  {
    console.log('I am line Three')
}, 0) // 3rd

console.log('I am line Four') // 2nd

setTimeout(() =>  {
    console.log('I am line Five')
}, 5000) // 5th