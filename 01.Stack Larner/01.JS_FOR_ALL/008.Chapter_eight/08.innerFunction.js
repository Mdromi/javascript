/*====================
08. Functions
CMD: [ node 008.Chapter_eight/08.innerFunction.js ]
SUB: Inner Function
EX: 
===================*/

function something(greet, name)
{
    function sayHi()
    {
        console.log(greet, name)
    }
    sayHi();
}

something(90, 'MD Romi')


function Name(greet, name)
{
    function getFirstName()
    {
       if(name){
           return name.split(' ')[0];
       } else {
           return ''
       }
    }

    var message = greet + ' ' + getFirstName();
    console.log(message);
}

Name('Good Morning', 'MD Romi')
Name('Good Morning');