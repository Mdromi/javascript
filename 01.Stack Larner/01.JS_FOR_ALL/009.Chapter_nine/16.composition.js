/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/16.composition.js ]
SUB: Function Composition
EX: 
===================*/

function print(inp)
{
    console.log(inp);
}

function multiplyByFive(n)
{
    return n * 5;
}

function add(a, b)
{
    return a + b;
}

print(multiplyByFive(add(3, 5)));