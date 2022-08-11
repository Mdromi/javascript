/*====================
04. STRING
CMD: [ node 001.Chapter_tow/04.string.js ]
SUB: String 
EX: 
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
String.fromCharCode(104,101,108,108,111) //"hello

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