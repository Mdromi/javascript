/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/14.recursive.js ]
SUB: Recursive Function
EX: 
===================*/
//1
function sayHi(n){
    if(n == 0)
    {
        return
    }
    console.log('Hi, I am Calling')
    sayHi(n - 1)
}
sayHi(10);

//2
function sum(n){
    if(n == 1)
    {
        return 1;
    }
    return n + sum(n-1);
}

console.log(sum(5));

//3
function fact(n){
    if(n == 1)
    {
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));

//4
var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex){
    if(lastIndex < 0)
    {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}
console.log(sumOfArray(arr, arr.length - 1))