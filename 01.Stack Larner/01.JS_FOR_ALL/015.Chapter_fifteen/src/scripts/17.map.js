/*====================
15. ES6
CMD: [ node 015.Chapter_fifteen/src/scripts/17.map.js]
SUB: Map in JavaScript   
EX: 
===================*/

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30],
])

map.set('d', 40)

map.set({name: 'Md Romi'}, 45)

// map.delete('c')
// map.clear()
// console.log(map)
// console.log(map.size)
// console.log(map.get('a'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

for(let [k, v] of map){
    // console.log(v, k)
}

map.forEach((v, k) => {
    // console.log(k, v)
})