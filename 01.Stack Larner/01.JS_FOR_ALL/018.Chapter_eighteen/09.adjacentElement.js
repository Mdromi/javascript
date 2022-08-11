/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/09.adjacentElement.js]
SUB: Insert Adjacent Element
EX: 
===================*/

let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'I am 5th Item')
let list = document.getElementById('list')
list.appendChild(li)

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo quae vero, nam unde aperiam harum, dignissimos, doloribus dolores facere earum perspiciatis blanditiis eum commodi natus. Cum adipisci fugiat quas dolorum, voluptatibus dolorem voluptas consequuntur, sequi itaque nulla modi.'
let p1 = createElement('p', 'load', text)
let p2 = createElement('p', 'load', text)

let div = createElement('div')
append(div, [p1, p2])

list.insertAdjacentElement('beforebegin', div)
// let content = document.getElementById('cont')
// content.appendChild(div)


// This Function Create HTML Allements
function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}
function append(parent, children){
    children.forEach(child => parent.appendChild(child))
}