/*====================
4.STRING
===================*/

//1
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`; // ES2015 / ES6

//2
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

//3
var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

//4
String.fromCharCode(104,101,108,108,111) //"hello"

//5
var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"

//6
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d

//7
var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"

//8
var greeting = `Hello`;
var place = `World`;
var greet = `Hello ${place}!`
console.log(greet); // "Hello World!"

//9
`a\\b` // = a\b
String.raw`a\\b` // = a\\b