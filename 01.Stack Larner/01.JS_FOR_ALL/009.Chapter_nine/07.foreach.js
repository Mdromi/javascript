/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/07.foreach.js ]
SUB: Foreach Implementation
EX: 
===================*/

var arr = [1, 2, 3, 4, 5]

// var sum = 0;
// arr.forEach(function(value, index, arr){
//     // console.log(value, index, arr);
//     sum += value;
// })

// console.log(sum);

function forEach(arr, cb)
{
    for(var i = 0; i < arr.length; i++)
    {
        cb(arr[i], i, arr);
    }
}

var sum = 0;
forEach(arr, function(value, index, arr){

    console.log(value, index, arr);
    sum += value;
})
console.log(sum); // 15

forEach(arr, function(value, index, arr){
    arr[index] = value + 5;
})

console.log(arr);