/*====================
05. String
CMD: [ node 005.Chapter_five/03.escapeNotation.js ]
SUB: Escape Notation 
EX: 
===================*/

var str = "This is a 'string'";
//console.log(str); // This is a 'string'

str = 'This is a \'string\'';
console.log(str); // This is a 'string'

str = 'This is a \tstring'; // \n = new line | \t = tab
console.log(str);

str = 'This is a \\ string'; // '\\' = printing \
console.log(str); 


/*ANOTHER ESCAPE NOTATION */
/*
    Carriage Return \r
    Vertical Tab \v
    Backspace \b
    Form \f
 */