/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/12.forAwait.js]
SUB: For Await of Loop
EX: 
===================*/

let asyncIterable = {
    [Symbol.asyncIterable](){
        let i = 0
        return{
            next(){
                if(i < 5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                }else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
};
(async function(){
    for await(let v of asyncIterable){
        console.log(v)
    }
})()