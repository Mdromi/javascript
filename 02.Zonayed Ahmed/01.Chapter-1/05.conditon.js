/*====================
03. Condition
CMD: [ node 01.Chapter-1/05.conditon.js ]
EX: 
===================*/

//1
var whatDay = 'Sunday';
if(whatDay === 'Friday')
{
    console.log('It is closed today');
}
else if(whatDay === 'Thursday')
{
    console.log('It is partially closed');
}
else if(whatDay === 'Saturday')
{
    console.log('Some office are closed today');
}
else{
    console.log('It normal working day today');
}

//2
var num = 10;
if(num > 1)
{
    if(num > 10)
    {
        console.log('Greater than 10');
    }
    else {
        console.log('Somewhere between 2 - 10');
    }
}

//3
whatDay = 'Friday';
switch(whatDay)
{
    case 'Saturday':
        console.log('Saturday! Today is closed');
        break;
    case 'Sunday':
        console.log('Sunday! It is normal day');
        break;
    case 'Monday':
        console.log('Monday! It is normal day');
        break;
    case 'Tuesday':
        console.log('Tuesday! It is normal day');
        break;
    case 'Wednesday':
        console.log('Wednesday! It is normal day');
        break;
    case 'Thursday':
        console.log('Thursday! It is normal day');
        break;
    case 'Friday':
        console.log('Friday! Today is closed');
        break;
    default:
        console.log('Not a Day');
}

//4
var rollNo = 6;
switch(rollNo)
{
    case 1 :
        console.log('Ramajan');
        break;
    case 2:
        console.log('Sagar');
        break;
    case 3:
        console.log('Niraj');
        break;
    case 4:
        console.log('Riyad');
        break;
    case 5:
        console.log('Amit');
        break;
    case 6:
        console.log('Shahadat');
        break;
    case 7:
        console.log('Dipu');
        break;
    case 8:
        console.log('Mahen');
         break;
    default:
        console.log('others');
}