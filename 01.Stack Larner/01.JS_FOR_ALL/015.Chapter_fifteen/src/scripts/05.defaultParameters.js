/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/05.defaultParameters.js]
SUB: Default Parameters                     
EX: 
===================*/

function sqr(n = 1){
    // n = n || 1
    return n* n
}
// console.log(sqr()) // 1

function greet(name = 'Md Romi', msg = 'Hello'){
    console.log(name.length)
    console.log(`${msg} ! ${name}`)
}

// greet('Md Romi', 'Hello') // name = null/ undefined than show error 
