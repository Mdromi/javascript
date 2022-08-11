/*====================
01. CHAPTER - 2
CMD: [ node 02.Chapter-2/2.4updateArray.js ]
SUB: Update Array Elements
EX: 
===================*/

// Array Fill Manual Way
const arr1 = new Array(10);
for(let i = 0; i < arr1.length; i++)
{
    arr1[i] = false;
}
// console.log(arr1);

// Array Fill
const arr2 = new Array(10);
arr2.fill(0)
// console.log(arr2);

const names = ['MD Romi', 'Oakib', 'Niton'];
names[0] = false;
// console.log(names)

// Fill Array and Update
const response = new Array(9);
response.fill(false);
for(let i = 0; i < response.length; i++)
{
    const rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? 'x' : 'o';
}
// console.log(response)

// Array is mutable
function update(arr){
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = `${i+1}. ${arr[i]}`
    }
    return arr;
}
const updateName = update(names);
console.log(names);
console.log(updateName);
console.log(names == updateName) // true