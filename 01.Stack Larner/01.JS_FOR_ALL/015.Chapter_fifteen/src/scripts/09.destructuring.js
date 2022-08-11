/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/09.destructuring.js]
SUB: Destructuring in JavaScript              
EX: 
===================*/

let person = {
    name: 'MD Romi',
    email: 'mdromi12@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

let {name, email, address: {city, country}} = person
// console.log(name, email, city, country) // MD Romi mdromi12@gmail.com Dhaka Bangladesh

let arr = [1, 2, 3, 4, 5]
let [first, second, , ,last] = arr

// console.log(first, second, last) // 1 2 5