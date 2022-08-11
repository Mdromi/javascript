/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/02.pureFunctions.js ]
SUB: Pure Functions
EX: 
===================*/

//What is pure Function?

/*
    `* It Returns the same result if given the same arguments`
    `* It does not cause any observable side effects`
*/

// 1 
function sqr(n)
{
    return n * n;
}

// console.log(sqr(2));
// console.log(sqr(2));
// console.log(sqr(2));

var n = 10;

function change()
{
    n = 100;
}
change()
console.log(n)


// 2
var point = {
    x: 45,
    y: 30
}

function printPoint(point)
{
    point.x = 100
    point.y = 200

    console.log(point);
}

printPoint(point);
console.log(point);