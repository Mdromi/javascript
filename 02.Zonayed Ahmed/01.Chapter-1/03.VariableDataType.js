/*====================
03. Variable
CMD: [ node 01.Chapter-1/03.VariableDataType.js ]
EX: 
===================*/

var person = 'MD Romi';
var something = "Anything";
var $text = "I am valid!";
var _canI = 'yes';
//console.log(_canI);

//Number
var aNumber = 10;
var anotherNumber = 10.10;

//String
var text = 'I want to say something';
var isStrings = '10';
//console.log(isStrings);

//Boolean
var isTrue = true;
var isFalse = false;

//Undefined
var anything;

//Null
var someThing = null;

console.log(someThing); //Romi //null


//Concatenation
var text = 'how' + 'are you?';
var welcomeMsg = 'Hello,' + text;
console.log(typeof(welcomeMsg)); //String

//Changing Data
var myName = 'md';
myName = 'Romi';
console.log(myName); //Romi