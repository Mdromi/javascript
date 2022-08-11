/*====================
08. Functions
CMD: [ node 008.Chapter_eight/03.invokingFunction.js ]
SUB: Invoking a Function
EX: 
===================*/

function functionName ()
{
    console.log('I am a Function')
}

function add()
{
    var a = 10;
    var b = 20;
    console.log(a + b);
}

function sub()
{
    var a = 50;
    var b = 20;
    console.log(a - b);
}

functionName(); // I am a Function
add(); // 30
sub(); // 30
console.log(sub()) // undefined

/*
for(var i = 0; i < 10; i++)
{
    functionName();
}
*/