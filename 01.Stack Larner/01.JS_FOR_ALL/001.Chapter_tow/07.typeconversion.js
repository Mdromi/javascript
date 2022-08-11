/*====================
07. Type Conversion
CMD: [ node 001.Chapter_tow/07.typeconversion.js ]
SUB: Type Conversion 
EX: typeof(Data)
===================*/

var x = 5 + 7; // x.valueOf() is 12, typeof x is a number
var x = 5 + "7"; // x.valueOf() is 57, typeof x is a string
var x = "5" + 7; // x.valueOf() is 57, typeof x is a string
var x = 5 - 7; // x.valueOf() is -2, typeof x is a number
var x = 5 - "7"; // x.valueOf() is -2, typeof x is a number
var x = "5" - 7; // x.valueOf() is -2, typeof x is a number
var x = 5 - "x"; // x.valueOf() is NaN, typeof x is a number

//Variables
var str = '1000';
var flt = '65.76';
var n = 10;
var vpName = 'Md Romi';
var t = true;
var f = false;

//1 Sting to Number
console.log(Number(str)); //Sting to Number = result Number-1000;
console.log(Number.parseInt(str)) //Sting to Number = result Integer-1000;
console.log(Number.parseInt(flt)) //Sting to Number = result Integer-65;
console.log(Number.parseFloat(str)); //Sting to Number = result Floating-.1000;
console.log(Number.parseFloat(flt)); //Sting to Number = result Floating-65.76;
console.log(Number(vpName)); //result NaN;

//2 Number/Boolean to String
console.log(n.toString()); // Number to String = result "10";
console.log(t.toString()); // Boolean to String = result "true";
console.log(f.toString()); // Boolean to String = result "false";

//3 Infinity
console.log(Number(Infinity)); // result Infinity;
console.log(String(Infinity)); // result "Infinity";
console.log(Boolean(Infinity)); // result true;
console.log(Boolean(-Infinity)); // result true;
console.log(Boolean('Infinity')); // result true;
console.log(Boolean("")); // result false;
console.log(Boolean("0")); // result true;
//Falsy Values
/*
1.''
2.0
3.null
4.undefined
5.NaN
*/
//Constructor
/*
1.String()
2.VariableName/(data).toString()
3.Number()
4.Number.parseInt(varName)
5.Number.parseFloat(varName)
6.Boolean()
*/