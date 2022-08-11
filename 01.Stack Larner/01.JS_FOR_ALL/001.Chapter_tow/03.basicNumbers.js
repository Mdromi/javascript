/*====================
03. DATA-TYPES
CMD: [ node 001.Chapter_tow/03.basicNumbers.js ]
SUB: DATA-TYPES 
EX: 
===================*/

/*
DataType: 
1.Primitive DataType:[
    1.Number // 10,4.5,8.3,930
    2.String // 'This is a text',"This is also text"
    3.Boolean // true,false
    4.Undefined
    5.null 
];

2.Object DataType / Non Primitive DataType / Reference DataType / Complex Data:[ 
    1.Array 
    2.Object 
    3.Function
];
*/

//1
var length = 16; //Number
var lastName = "Romi"; //String
var x = {firstName: "Md", lastNBame: "Romi"}; //Object

//2
var x = 16 + 4 + "Volvo"; // result: 20Volvo
var x = "Volvo" + 16 + 4; // result: Volvo164
//console.log(x);

//3
var x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String 

//***********NUMBERS************
/*
Type of Number:[
    Decimal Number[10]
    1.Integers,int [3,300,200]
    2.Floating point,float [3.4 , 2.4 , 4.6 , 100.0]
    3.Hexadecimal is a Base 16 Number System[0xff]
    4.Where Octal is a Base 8 Number System[0756]
]
 */

var n = 1482; // Integers,int [3,300,200]
var f = 3.14; // Floating point,float [3.4 , 2.4 , 4.6 , 100.0]
var nn = Number(45); // Must Number
var rr = Number('86');// Must Number
var hex = 0xff; //Hexadecimal Number = result 255;
var oct = 0756 //Octal Number = result 494;
console.log(hex," ", oct);// result 255 494;

console.log(Number.parseFloat(nn)); //Any Number To Floating Number
console.log(Number.parseInt(f)); //Any Number To Integers Number

console.log(Number.MAX_VALUE); //Maximum Value
console.log(Number.MIN_SAFE_INTEGER); //Minimum Value
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 0.0000000000000002220446049250313
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(1/0); //Infinity dataType
console.log('abc' * 10);//NaN (Not a Number)

//***********STRINGS************
var str = 'String';
var str2 = "String2";
var str3 = `String3`; // ES2015 / ES6
var str4 = String('Learning JavaScript String');
var str5 = String(5656774); //"5656774"
var str6 = String(565.6774); //"565.6774"
console.log(str4, " " , str5," " ,str6);

//***********BOOLEANS************
var b1 = true;
var b2 = false;
var b3 = Boolean(true);
var b4 = Boolean(false);
//console.log(b3);


//***********NULL VS UNDEFINED************
var abc;
var xyz = null;  
/* TypeOf */
typeof ""   // Returns "string"
typeof "MD" // Returns "string"
typeof "MD Romi"// Returns "string" 

typeof 0  // Returns "number"
typeof 314  // Returns "number"
typeof 3.14 // Returns "number"
typeof (3)  // Returns "number"
typeof (3 + 4)// Returns "number" 

typeof "John" // Returns "string"
typeof 3.14  // Returns "number"
typeof true  // Returns "boolean"
typeof false  // Returns "boolean"
typeof x  // Returns "undefined" (if x has no value)
typeof null; // 'object';