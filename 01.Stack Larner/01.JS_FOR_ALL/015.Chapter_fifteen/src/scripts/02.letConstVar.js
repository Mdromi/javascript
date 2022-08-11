/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/02.letConstVar.js]
SUB: Let vs Const vs Var                         
// EX: 
===================*/

let a = 10

a = 100
// console.log(a)

if(true){
    let b = 10
}
// console.log(b) // Error

for(let i = 0; i < 5; i++)
{

}
// console.log(i) // Error

{
    let iAmLet = 'I am Let'
}
// console.log(iAmLet) // Error

(function(){
    var abc = 'ABC'
    // console.log(abc)
})()

// console.log(abc) // ERror