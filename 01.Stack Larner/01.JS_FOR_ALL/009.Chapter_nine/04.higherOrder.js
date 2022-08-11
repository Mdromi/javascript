/*====================
09. Functional Programming
CMD: [ node 009.Chapter_nine/04.higherOrder.js ]
SUB: Higher Order Function
EX: 
===================*/

// 5. We can Pass Function as an Arguments

function add(a, b)
{
    return a + b;
}

function manipulate(a, b, func)
{
    var c = a + b;
    var d =  a - b;

    function multiply()
    {
        var m = func(a, b)
        return c*d*m;
    }

    return multiply;
}

var multiply = manipulate(3, 4, add);

console.log(multiply); // [Function: multiply]
console.log(multiply()); // 49