/*====================
05. Arrays
CMD: [ node 006.Chapter_six/06.multidimensionalArray.js ]
SUB: Multidimensional Array
EX: 
===================*/

/*
var arr = [
    [
        [],
        [],
        []
    ],
    [],
    []
]
*/

var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]
console.log(arr); // [ [ 78, 71, 80, 90 ], [ 80, 75, 90, 86 ], [ 71, 75, 79, 80 ] ]

var i, j;
var str= [];
for(i = 0; i < arr.length; i++)
{
    for(j = 0; j < arr[i].length; j++)
    {
        str[j] = arr[i][j];
    }
    console.log(str)
}