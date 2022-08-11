/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/13.asyncGenerators.js]
SUB: Async Generators
EX: 
===================*/

async function myAsyncGenerator(){
    let i = 0

    while (true){
        if(i > 5) return
         yield await Promise.resolve(i++)
    }
};
(async function(){
    for await (let v of myAsyncGenerator()){
        console.log(v)
    }
})()