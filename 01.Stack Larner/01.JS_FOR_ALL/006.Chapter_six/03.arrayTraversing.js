/*====================
05. Arrays
CMD: [ node 006.Chapter_six/03.arrayTraversing.js ]
SUB: Array Traversing
EX: 
===================*/

var arr = [4, 5, 7, 4, 8, 9];
var i, sum = 0;

for(i = 0; i < arr.length; i++)
{
    sum += arr[i];
    arr[i] += 2;
    console.log(arr);

    if(arr[i] % 2 == 0)
    {
        console.log(arr[i]);
    }
}
console.log('Sum = ' + sum); 