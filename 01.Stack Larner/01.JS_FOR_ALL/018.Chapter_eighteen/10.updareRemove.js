/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/10.updareRemove.js]
SUB: Insert Adjacent Element
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
}, 5000)
setTimeout(() =>{
    list.lastChild.remove()
},3000)