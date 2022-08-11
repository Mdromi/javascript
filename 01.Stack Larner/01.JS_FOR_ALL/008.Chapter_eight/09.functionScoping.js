/*====================
08. Functions
CMD: [ node 008.Chapter_eight/09.functionScoping.js ]
SUB: Function Scoping
EX: 
===================*/

var a = 'abc';

if(true)
{
    if(true)
    {
        var b = 'I am B';
    }
}
// console.log(b); 

function x()
{
    var a = 20
    function y()
    {
        var a = 10;
        console.log(a); 
    }
    console.log(a);  //2 0
    y(); // 10
}
// console.log(a); // abc
x()

function test(n)
{
    function a()
    {
        return n%3 == 0
    }

    function b()
    {
        return n%5 == 0
    }

    if(a() && b())
    {
        console.log(n , 'is divisible by both 3 and 5');
    }
    else{
        console.log('Not a valid Number');
    }
}

test(1500)