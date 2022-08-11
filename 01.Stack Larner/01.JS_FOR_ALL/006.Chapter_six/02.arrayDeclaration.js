/*====================
05. Arrays
CMD: [ node 006.Chapter_six/02.arrayDeclaration.js ]
SUB: Array Declaration
EX: 
===================*/

var arr = [1, 2, 3, 4, 5];
arr[5] = 6;
console.log(arr[5]); 
console.log(arr.length);

var araLength = 0;
while(true)
{
    if(arr[araLength] !== undefined)
    {
        araLength++;
    }
    else{
        break;
    }
}
console.log(araLength);

var arr2 = Array(1, 2, 3);
console.log(arr2);