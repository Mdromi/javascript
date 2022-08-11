/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/02.storeResultAsyncFun.js]
SUB: How to Store Result from Async Function        
EX: 
===================*/

function sayMyName(name){
    let result
    setTimeout(() => {
        result = name
        console.log('I have Done')
    }, 3000);

    return result
}

// let output = sayMyName('MD Romi')
// console.log(output) //undefined

function sayMyNameAsy(name){
    setTimeout(() => {
        console.log(name)
    }, 3000);
}

let outputAsy = sayMyNameAsy('MD Romi') // MD Romi
// console.log(outputAsy) //undefined