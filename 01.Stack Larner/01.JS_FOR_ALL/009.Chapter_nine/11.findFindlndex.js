/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/11.findFindlndex.js ]
SUB: Find and Findlndex Function
EX: 
===================*/

var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]

//1
// var result = arr.find(function(value){
//     return value == 9
// });

// console.log(result); // 9

// var result = arr.findIndex(function (value){
//     return value == 9
// })
// console.log(result); // index 4

//2
function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++)
    {
        if(cb(arr[i]))
        {
            // return arr[i];
            return i;
        }
    }
}

var result = myFind(arr, function(value){
    return value == 9
});

console.log(result);