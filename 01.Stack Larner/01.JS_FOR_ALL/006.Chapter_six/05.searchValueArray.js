/*====================
05. Arrays
CMD: [ node 006.Chapter_six/05.searchValueArray.js ]
SUB: Search Value in Array
EX: 
===================*/

//Search Data

var arr = [4, 5, 7, 1, 55, 81, 9, 0, 32, 97, 64, 10, 11, 8.5, 87]

var find = 10;
var isFound = false;
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] == find)
    {
        console.log('Data Found at Index ' + i);
        isFound = true;
        break;
    }
}
if(!isFound)
{
    console.log('Data Not Found!');
}