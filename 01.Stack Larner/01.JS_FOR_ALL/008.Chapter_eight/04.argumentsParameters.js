/*====================
08. Functions
CMD: [ node 008.Chapter_eight/04.argumentsParameters.js ]
SUB: Function Arguments and Parameters
EX: 
===================*/

function add( a, b)
{
    var result = a + b;
    console.log(result);
}

function sub(a, b)
{
    var result = a - b;
    console.log(result);
}

function araSum(ara)
{
    var sum = 0;
    for(var i = 0; i < ara.length; i++)
    {
        sum += ara[i];
    }

    console.log(sum);
}

// add(5, 10); // 
// sub(20, 10); // 

var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9]
var arr3 = [9, 7, 1]

araSum(arr1);
araSum(arr2);
araSum(arr3);


