/*====================
CP: 02 JavaScript Advance
05. Strict
CMD: [ node 02.Chapter-2/5.strict.js ]
EX: 
===================*/


var name = `MD Romi`;
var age = 10;
var address = `Cumilla`;
console.log(`My name is ` + name + `and I am ` + age + ` years old!`);
function aFunc(){
    `use strict`;
    job = `Student`;
    console.log(`A Function with Strict Mode Enabled`);
}
aFunc();
console.log(`I am a ` + job + ` And I am from ` + address)

`use strict`;
// Existing Object
var obj = {
    name: 'MD Romi',
    job: 'Student'
}

Object.preventExtensions(obj);

// Assign a New poperties
obj.age = 35;

// try to print this new one
console.log(obj.age)