/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/08.funcDeclarExpr.js ]
SUB: Function Declaration vs Expression
EX: 
===================*/

//Function Declaration
abc()
function abc(){
    console.log('I am Function')
}

// newABC()  // Error

//Function Expression
var newABC = function(){
    console.log('I am New Function ABC')
}

newABC()

// Creational Phase
    //abc = ref
    // newABC = undefined
// Executional Phase