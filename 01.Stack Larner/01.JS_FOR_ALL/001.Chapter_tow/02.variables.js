/*====================
02. Variables
CMD: [ node 001.Chapter_tow/02.Variables.js ]
SUB: Variables
EX: var varName = data;
===================*/

//Variables
//1
var names = 'Md Romi';
var age = 18;
//console.log(names)
//console.log(age)

console.log( names +' Knows JavaScript');
console.log('His age only  ' + age)
console.log( names + ' now learning a javaScript Course for all')
console.log('But his age is only ' +age)

//2
var x = 5;
var y = 8;
var z = x+y;

//3
var price1 = 5;
var price2 = 6;
var total = price1+price2;

//4
var carName, carPrice, carId;
carName = "Colvo";
carPrice = 1204953;
carId = "vol7047";
//console.log(carName, carPrice, carId);

//5
var person = "Md Romi";
carName = "Volvo";
price = 200;

//6
var mathNumber = 10;
var accountNumberDetailsId = 10342;
var account_number_details_id = 74893;

//7
var greet = "Hello" , who = "world";
console.log("%s, %s!", greet, who);  //result hello world

//8
var number1 = 5;
number1 = 3;
console.log(number1); // 3
//window.alert(number1); // 3

number1 = number1 + 5; // 3 + 5 = 8
number1 = number1 - 6; // 8 - 6 = 2
var number2 = number1 * 10; // 2 (times) 10 = 20
var number3 = number2 / number1; // 20 (divided by) 2 = 10;

//9
var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; /* 64-bit number (from -9,223,372,036,854,775,808 to
9,223,372,036,854,775,807)*/
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0/0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define it to anything yet
//window.alert(aRandomVariable); // undefinedGoalKicker.com – JavaScript® Notes for Professionals 11
var myNull = null; // null
// etc...

//10
isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function(){}); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number