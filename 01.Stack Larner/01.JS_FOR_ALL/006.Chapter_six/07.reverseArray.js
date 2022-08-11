/*====================
05. Arrays
CMD: [ node 006.Chapter_six/07.reverseArray.js ]
SUB: Reverse An Array
EX: 
===================*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var i, temp;
var arrLength = arr.length - 1;
for(i = 0; i < arr.length / 2; i++)
{
    temp = arr[i];
    arr[i] = arr[arrLength];
    arr[arrLength] = temp;
    arrLength--;
}
console.log(arr);
console.log(arr.reverse());


