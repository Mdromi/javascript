/*====================
08. Functions
CMD: [ node 008.Chapter_eight/06.returnFunction.js ]
SUB: Return Function
EX: 
===================*/

function addAll()
{
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    
    return sum;
}

var result;
result = addAll(1, 2, 3, 4, 5);
console.log(result); // 15

result = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result); // 55


function person(name, email)
{
    return {
        name: name,
        email: email
    }
}

var p1 = person('MD Romi', 'mdromi@gmail.com');
console.log(p1); // { name: 'MD Romi', email: 'mdromi@gmail.com' }