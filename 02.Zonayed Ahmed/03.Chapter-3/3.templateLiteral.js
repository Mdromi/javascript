/*====================
CP: 03 JavaScript ES6
03. Template Literal
CMD: [ node 03.Chapter-3/3.templateLiteral.js ]
EX: 
===================*/

const name6 = `Md Romi`,
age6 = 21,
work6 = `Student`;
console.log(`My name is ${name6} and I\'m ${age6} years old! Currently I\'m a ${work6}`);

function calculateAge(dob){
    return `I'm ${2022 - dob} years old!`;
}
calculateAge(1996);

console.log(`Hello World!
How are You?
    I am Fine...    And You?
`);

const aFunc = (string, name, age) => {
    console.log(`String: `);
    console.log(string);
    console.log(`Name: ${name}`);
    console.log(`String: ${age}`);
}

const name = `Md Romi`;
const age = 19;
aFunc `I'm ${name}. I'm ${age} years old.`