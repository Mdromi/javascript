/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/11.cloneNode.js]
SUB: How to clone Node Include it's child Elements
EX: 
===================*/

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

let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'I am 5th Item')
let list = document.getElementById('list')
list.appendChild(li)

// Remove Element and Update
let firstChild = list.firstElementChild
setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' (modified)'
    firstChild.classList.add('text-success')
    firstChild.style.background = '#eee'
}, 5000)

let lastItem = list.lastElementChild.cloneNode(true)
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)