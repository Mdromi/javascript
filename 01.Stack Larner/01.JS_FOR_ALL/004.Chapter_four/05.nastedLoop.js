/*====================
03. LOOP
CMD: [ node 004.Chapter_four/05.nastedLoop.js ]
SUB: Do While Loop
EX: 
===================*/

//1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

var i, j, n = 5;

for(i = 1; i <= n; i++)
{
    var result = '';
    for(j = 1; j <= i; j++)
    {
        result += j + ' ';
    }
    console.log(result);
}


//2
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
for(i = 1; i <= n; i++)
{
    var result = '';
    for(j = 1; j <= n; j++)
    {
        result += '* ';
    }
    console.log(result);
}