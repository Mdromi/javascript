/*====================
03. Function
CMD: [ node 01.Chapter-1/10.function.js ]
EX: 
===================*/

function funcName(){
    console.log('Hello I am from the function');
}
// funcName()

var funcName = function(){
    console.log('Hello I am from the function');
}
// funcName()

function sumMachine(a, b){
    var sum = a + b
    return sum;
}

// console.log(sumMachine(2, 2))
// console.log(sumMachine(4, 4))

function printMyName(name, age){
    console.log(`My Name is: ` + name + ` and I am  ` + age + ` years old`)
}
// printMyName('Md Romi', 19)

//inner function
function callMyName(name, callback){
    var myAge = 20
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr. ' + name);
}
function hello(age){
    console.log('I am passed through and my age is: ' + age);
}

// callMyName('MD Romi', hello)

// Return Function
function welcomeMsg(name){
    console.log('Welcome Mr. ' + name)
    return function options(menu){
        console.log('Do you like ' + menu + ' Mr. ' + name)
    }
}
welcomeMsg('Md Romi') ('Coffee');

function changeValue(a){
    console.log(`Value of a inside function before changing: ` + a);
    a = 10;
    console.log('Value of a before changing function is changing: ' + a)
    return a
}
var a = 100;
// console.log('Value of a before changing function is applied: ' + a)
// changeValue(a)
// console.log('Value of a after changing function is applied: ' + a)


function aFunc(a){
    console.log(`Before changing the property: ` + a.one)
    a.one = `two`
    console.log(`After changing the property: ` + a.one)
}
var a = {
    one: 'one'
}
aFunc(a)
console.log(a.one) // two
