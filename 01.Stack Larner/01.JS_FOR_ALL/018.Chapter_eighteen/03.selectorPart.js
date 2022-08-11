/*====================
18. Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/03.selectorPart.js]
SUB: Selector Part One
EX: 
===================*/
console.dir(document.body)

let title = document.getElementById('title')
console.log(title)

let pragraph = document.getElementsByClassName('load')
console.log(pragraph)

let list = document.getElementsByTagName('li')
console.log(list)

let listItemOne = document.getElementsByName('list-item-one')
console.log(listItemOne)