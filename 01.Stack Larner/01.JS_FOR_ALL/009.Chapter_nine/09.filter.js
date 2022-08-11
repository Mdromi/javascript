/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/09.filter.js ]
SUB: Filter Function
EX: 
===================*/

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9];

// // 1
// var filterArr = arr.filter(function(value){
//     return value % 2 == 0;
// })
// console.log(filterArr);

function myFunction(arr, cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

var result1 = myFunction(arr, function(value){
    return value % 2 == 1;
});

var result2 = myFunction(arr, function(value){
    return value > 4;
});

console.log(result1);
console.log(result2);