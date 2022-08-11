/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/06.TraverseDOMElements.js]
SUB: How to Traverse DOM Elements
EX: 
===================*/

let list = document.getElementById('list')

let parent = list.parentElement
console.log(parent)

let children = list.children
// console.log(children)

// console.log(list.previousSibling)
// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

let li = document.querySelector('li')
// console.log(li.nextElementSibling)

console.log(list.firstElementChild)
console.log(list.lastElementChild)