/*====================
03. Loop
CMD: [ node 01.Chapter-1/06.loop.js ]
EX: 
===================*/

//for loop
var i;
for(i = 0; i < 5; i++)
{
    console.log('Go ' + i + ' step');
}

//do while loop
var num = 15;
do {
    console.log('Inside the loop, num is: ' + num);
    num +=1;
} while(num < 10);
console.log('Outside the loop');


//while loop
num = 20;
while (num < 10)
{
    console.log('Inside the loop');
    num +=1;
}
console.log('Outside the loop');


//break
for(i = 0; i < 5; i++)
{
    if(i === 3)
    {
        break;
    }
    console.log('Go ' + i + ' step');
}

//continue
for(i = 0; i < 10; i++)
{
    if(i === 5)
    {
        console.log(i + ' is skipped');
        continue;
    }
    console.log('Go ' + i + ' step');
}
