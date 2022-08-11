/*====================
03. Break
CMD: [ node 004.Chapter_four/06.break.js ]
SUB: 
EX: 
===================*/
//1
while(1){
    var rand = Math.floor(Math.random() * 10 +1)
    if(rand == 9){
        console.log('Winner Winner Chicken Dinner');
        break;
    }else{
        console.log('You have got ' + rand )
    }
}


//2
var i;
for(i = 1; i < 10; i++)
{
    if(i % 5 == 0)
    {
        break;
    }
    else
    {
        console.log(i);
    }
}