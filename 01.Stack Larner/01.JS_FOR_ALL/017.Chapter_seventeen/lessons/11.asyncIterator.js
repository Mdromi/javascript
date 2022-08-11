/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/11.asyncIterator.js]
SUB: Async Iterator
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
}

let iterate = asyncIterable[Symbol.asyncIterable]();
(async function() {
    // let v = await iterate.next()
    // console.log(v)
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    
})()