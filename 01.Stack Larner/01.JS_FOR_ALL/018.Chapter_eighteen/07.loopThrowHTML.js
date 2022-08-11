/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/07.loopThrowHTML.js]
SUB: How to Loop Throw HTML Collection
EX: 
===================*/

let listItem = document.getElementsByTagName('li')
// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]

listItems.forEach((li, ind) => {
    let text = li.innerHTML
    li.innerHTML = `(${ind + 1})  ${text}`
})