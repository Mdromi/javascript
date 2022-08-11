/*====================
05. String
CMD: [ node 005.Chapter_five/01.string.js ]
SUB: JavaScript Notes 
EX: 
===================*/

/* ------------------
7.1: Basic Info and String Concatenation 
--------------------- */

//1
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`; // ES2015 / ES6

//2
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

//3
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

//4
String.fromCharCode(104,101,108,108,111) //"hello"

//5
var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"
//console.log(typeof objectString);

//6
var foo = "Foo";
var bar = "Bar";
//console.log(foo + bar); // => "FooBar"
//console.log(foo + " " + bar); // => "Foo Bar"
//foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"

//7
var string = "string";
var number = 32;
var boolean = true;
//console.log(string + number + boolean); // "string32true"

//8
var greeting = `Hello`;
var place = `World`;
var greet = `Hello ${place}!`
//console.log(greet); // "Hello World!"


// `a\\b` // = a\b
// String.raw`a\\b` // = a\\b

/* ------------------
7.2: Reverse String 
--------------------- */

//9
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('string'); // "gnirts"


'?????.'.split('').reverse().join(''); //fails

//10
function reverseString(str) {
    return [...String(str)].reverse().join('');
}
    //console.log(reverseString('stackoverflow')); // "wolfrevokcats"
    // console.log(reverseString(1337)); // "7331"
    // console.log(reverseString([1, 2, 3])); // "3,2,1"


//11 Custom reverse() function
function reverse(string) {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
    }
    return strRev;
}
//console.log(reverse("zebra")); // "arbez"

/* ------------------
7.3: Comparing Strings Lexicographically 
--------------------- */

//1
var a = "hello";
var b = "world";
//console.log(a.localeCompare(b)); //-1

//2
function strcmp(a, b)
{
    if(a === b)
    {
        return 0;
    }

    if(a > b)
    {
        return 1;
    }

    return -1;
}

// console.log(strcmp("hello", "world")); // -1
// console.log(strcmp("hello", "hello")); // 0
// console.log(strcmp("world", "hello")); // 1

//3
var arr = ["bananas", "cranberries", "apples"];

arr.sort(function(a, b) {
    return a.localeCompare(b);
});

// console.log(arr); // [ "apples", "bananas", "cranberries" ]

/* ------------------
7.4: Access character at index in string 
--------------------- */

//1
var string = "Hello, World!";
// console.log( string.charAt(4) ); // "o"

var string = "Hello, World!";
// console.log( string[4] ); // "o"

var string = "Hello, World!";
// console.log( string.charCodeAt(4) ); // 111

/* ------------------
7.5: Escaping quotes
--------------------- */
//1
var text = 'L\'albero means tree in Italian';
//console.log( text ); //"L'albero means tree in Italian"

var text = "I feel \"high\"";

var content = "<p class=\"special\">Hello World!</p>"; // valid String
var hello = '<p class="special">I\'d like to say "Hi"</p>'; // valid String

//2
var hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>"; // valid String
var hello = '<p class="special">I&apos;d like to say "Hi"</p>'; // valid String

var x = `"Escaping " and ' can become very annoying`;

console.log(x);

