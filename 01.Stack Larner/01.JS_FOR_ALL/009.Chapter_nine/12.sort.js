/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/12.sort.js ]
SUB: Sort, Some and Every Function
EX: 
===================*/

var person = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

 var arr = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 8, 2, 1, 7, -4]

 // 1
// arr.sort();
// console.log(arr);

// person.sort();
// console.log(person);

arr.sort(function(a, b){
    if(a > b){
        return 1;
    } else if(a < b){
        return -1;
    } else{
        return 0
    }
});

console.log(arr);

// 2
person.sort(function(a, b){
    if(a.age > b.age){
        return 1;
    } else if(a.age < b.age){
        return -1;
    } else{
        return 0
    }
})
console.log(person);

// 3
var arr2 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7]
var res1 = arr2.every(function(value){
    return value % 2 == 0
})

console.log(res1); // false

var res2 = arr2.every(function(value){
    return value >= 0
})

console.log(res2); // true

// 4
var res3 = arr.some(function(value){
    return value % 2 == 1
})
console.log(res3); // true

var res4 = arr.some(function(value){
    return value >= 0
})
console.log(res4); // true