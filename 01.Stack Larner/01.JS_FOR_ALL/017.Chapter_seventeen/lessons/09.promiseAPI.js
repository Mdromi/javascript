/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/09.promiseAPI.js]
SUB: Promise API
EX: 
===================*/

// const delay = s => new Promise(resolve => setTimeout(resolve, s*1000))
// delay(2).then(() => console.log('2 second Delay'))
// delay(1).then(() => console.log('1 second Delay'))
// delay(3).then(() => console.log('3 second Delay'))
// delay(2).then(() => console.log('2 second Delay'))
// delay(5).then(() => console.log('5 second Delay'))

// let p1 = Promise.resolve('Test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('REJECT')
// p2.catch(e => console.log(e))


// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr)
//     })


let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'one')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Two')
})

let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'Three')
})

let promiseArr = [p1, p2, p3]
Promise.all(promiseArr)
    .then(arr => console.log(arr))

Promise.race(promiseArr)
    .then(arr => console.log(arr))