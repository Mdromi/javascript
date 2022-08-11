/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/15.eventDelegation.js]
SUB: Introduction to Event DOM 
EX: 
===================*/
let btn = document.getElementById('btn')

let list = document.getElementById('list')
btn.addEventListener('click', function (e){
    let item = list.lastElementChild.cloneNode(true)
    let text = 'Newly Created Item'
    item.innerHTML = text
    list.appendChild(item)
});

// Event Delegation Problem
// [...list.children].forEach(li => {
//     li.onclick = function (e){
//         console.log(li)
//         e.target.remove()
//     }
// })

list.addEventListener('click', function (e){
    if(this.contains(e.target)){
        e.target.remove()
    }
})


let box = document.getElementById('box')
box.addEventListener('mousemove', function (e){
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY

    if(e.offsetX == 50 && e.offsetY == 50){
        alert('50 50')
    }
})