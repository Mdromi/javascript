/*=======================
    node recursion.js
=========================*/

// Recursion in JavaScript
// f(n-1) + n = f(n)

function sum(n){
    if(n === 0){
        return 0
    } else{
        return sum(n - 1) + n; 
    }
}
// console.log(sum(3))

/* 

sum(3)
    sum(2) + 3
    sum(1) + 2 + 3
    sum(0) + 1 + 2 + 3
    -> 0 + 1 + 2 + 3
*/

let n = 100000
console.log((n * (n + 1)) / 2)