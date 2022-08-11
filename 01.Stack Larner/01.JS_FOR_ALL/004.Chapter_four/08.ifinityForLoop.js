/*====================
03. Ifinity For Loop
CMD: [ node 004.Chapter_four/08.ifinityForLoop.js ]
SUB: 
EX: 
===================*/

for(; ;)
{
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 9)
    {
        console.log('Winner Winner Chicken Dinner');
        break;
    }else{
        console.log('You have got ' + rand )
    }
}