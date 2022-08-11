/*====================
05. Objects
CMD: [ node 007.Chapter_seven/07.iterateObjectProperties.js ]
SUB: Iterate Object Properties
EX: 
===================*/
var obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log('x' in obj); // true
// console.log('p' in obj) // false

for(var i in obj)
{
    console.log (i);
    console.log(obj[i]);
}
