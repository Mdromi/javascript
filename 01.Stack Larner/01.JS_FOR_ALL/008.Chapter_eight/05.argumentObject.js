/*====================
08. Functions
CMD: [ node 008.Chapter_eight/05.argumentObject.js ]
SUB: Argument Object
EX: 
===================*/

function test (a, b, c)
{
    console.log(arguments); // [Arguments] {}
    // console.log(JSON.stringify(arguments)); // {}
    // console.log(typeof a); // undefined

    // for(var i = 0; i < arguments.length; i++)
    // {
    //     console.log(arguments[i]);
    // }
}

test()
test(10, 20, 30); // [Arguments] { '0': 10, '1': 20, '2': 30 }

function addAll()
{
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    console.log(sum);
}

addAll(1, 2, 3, 4, 5);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);