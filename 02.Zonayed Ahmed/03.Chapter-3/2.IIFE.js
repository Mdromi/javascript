/*====================
CP: 03 JavaScript ES6
02. IIFE (Immediately Invoked Function Expressions)
CMD: [ node 03.Chapter-3/2.IIFE.js ]
EX: 
===================*/

(function aDemoFunc() {
    var msg = `Hello World`;
    console.log(msg);
})();
// aDemoFunc(); // throw error`

{var myName = function() {
    var a = `MD Romi`;
    console.log(a);
}}
myName();


{const myName6 = function() {
    const a = `MD Romi`;
    console.log(a);
}}
myName6();