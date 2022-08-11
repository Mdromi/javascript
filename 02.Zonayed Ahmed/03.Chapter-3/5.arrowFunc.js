/*====================
CP: 03 JavaScript ES6
05.Arrow Function
CMD: [ node 03.Chapter-3/5.arrowFunc.js ]
EX: 
===================*/

var aFunc = function(){
    console.log(`A Demo ES5 Function Expression`);
}
// aFunc();

const aFunc6 = () => console.log(`A Demo ES5 Function Expression`);
// aFunc6();

// Otomatic return
const dob = [1996, 1986, 2017, 1989];

const currentAge5 = dob.map(function(oneDob){
    return 2022 - oneDob;
});
// console.log(currentAge5)

const currentAge6 = dob.map(oneDob => 2022 - oneDob);
// console.log(currentAge6)

// Lexical This
const lex5 = {
    aFunc: function(){
        console.log(this);
        return function(){
            console.log(this)
        }
    }
} 
// lex5.aFunc()();

const lex6 = {
    aFunc: () => {
        console.log(this);
        return () => console.log(this);
    }
}
// lex6.aFunc()();

const lex56 = {
    aFunc: function () {
        console.log(this);
        return () => console.log(this);
    }
}
// lex56.aFunc()();

// (() => {
//     console.log(`My name is Md Romi`);
// })();