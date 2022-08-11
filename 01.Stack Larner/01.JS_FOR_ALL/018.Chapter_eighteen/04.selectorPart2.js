/*====================
18. Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/04.selectorPart2.js]
SUB: Selector Part Two
EX: 
===================*/

let title = document.querySelector('#title')
console.log(title)

let pragraph = document.querySelector('.load')
console.log(pragraph)

let pragraphs = document.querySelectorAll('.load')
console.log(pragraphs)

let list = document.querySelectorAll('li')
console.log(list)

let listItemOne = document.querySelector(' [name|="list-item-one"] ')
console.log(listItemOne)