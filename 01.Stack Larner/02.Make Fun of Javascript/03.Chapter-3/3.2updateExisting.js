/*====================
01. CHAPTER - 2
CMD: [ node 03.Chapter-3/3.2updateExisting.js ]
SUB: Update Existing Elements
EX: 
===================*/

// Easy One
const numbers = [1, 2, 7, 4, 5, 6]
numbers[2] = 3;
console.log(numbers)

// Array of Objets
const students = [
    {id: 1, name: 'Md Romi'},
    {id: 2, name: 'Sakib'},
    {id: 3, name: 'Oakib'},
    {id: 4, name: 'Hafiz'},
    {id: 5, name: 'Nirjon'},
];
const givenID = 3;
const updatedName = 'Oakib Shikder';

for(let i = 0; i < students.length; i++){
    if(givenID == students[i].id){
        students[i].name = updatedName;
        break;
    }
}
console.log(students);