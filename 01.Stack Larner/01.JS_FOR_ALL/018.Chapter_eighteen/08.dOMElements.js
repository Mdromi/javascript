/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/08.dOMElements.js]
SUB: Create DOM Elements
EX: 
===================*/

let li = document.createElement('li')
li.className = 'list-group-item'
li.setAttribute('title', 'I am Fourth Item')
li.innerHTML = 'Four'

let list = document.getElementById('list')
list.appendChild(li)


let li2 = createElement('li', 'list-group-item', 'Five')
li2.setAttribute('title', 'I am 5th Item')
list = document.getElementById('list')
list.appendChild(li2)

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo quae vero, nam unde aperiam harum, dignissimos, doloribus dolores facere earum perspiciatis blanditiis eum commodi natus. Cum adipisci fugiat quas dolorum, voluptatibus dolorem voluptas consequuntur, sequi itaque nulla modi.'
let p1 = createElement('p', 'load', text)
let p2 = createElement('p', 'load', text)

let div = createElement('div')
append(div, [p1, p2])
// console.log(div)

let content = document.getElementById('cont')
// console.log(content)
content.appendChild(div)

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