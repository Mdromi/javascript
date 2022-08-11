/*====================
05. String
CMD: [ node 005.Chapter_five/06.stringLength.js ]
SUB: String Length
EX: 
===================*/

var str = 'Some String';
var length = 0;

while(true)
{
    if(str.charAt(length) == '')
    {
        break;
    } else
    {
        length++;
    }
}

console.log(length); //11
console.log(str.length); // 11
console.log('somejfidsfdjsofjosfju8fjkodkjfs'.length); //31
