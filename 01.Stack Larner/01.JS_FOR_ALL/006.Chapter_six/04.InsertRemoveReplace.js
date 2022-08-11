/*====================
05. Arrays
CMD: [ node 006.Chapter_six/04.InsertRemoveReplace.js ]
SUB: Array Insert Remove and Replace
EX: 
===================*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
//Insert 9 to index 3

//arr[3] = 9

// arr.push(9) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.unshift(9) // [9, 1, 2, 3, 4, 5, 6, 7, 8 ]
// arr.splice(3, 0, 9, 10) // .splice(index, delateCount, pushData...) || [1, 2, 3, 9, 10, 4, 5, 6, 7, 8]

// arr[3] = null; // [1, 2, 3, null, 5, 6, 7, 8]
// arr.pop(); // [1, 2, 3, 4, 5, 6, 7]
// arr.shift() // [2, 3, 4, 5, 6, 7, 8]
// arr.splice(3, 1) // .splice(index, delateCount); || [1, 2, 3, 5, 6, 7, 8]
arr.splice(3, 1, 44) // .splice(index, delateCount, pushData...); || [1, 2, 3, 44, 5, 6, 7, 8]
console.log(arr);