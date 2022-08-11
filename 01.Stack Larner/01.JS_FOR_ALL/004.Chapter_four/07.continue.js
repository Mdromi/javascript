/*====================
03. Continue
CMD: [ node 004.Chapter_four/07.continue.js ]
SUB: 
EX: 
===================*/

//1 
var i;
for(i = 0; i < 10; i++)
{
    if(i === 3 || i === 7)
    {
        console.log(i + ' Skiped!');
        continue;
    }
    console.log(i);
}