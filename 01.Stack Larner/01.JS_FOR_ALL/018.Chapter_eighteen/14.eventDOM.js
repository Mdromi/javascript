/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/14.eventDOM.js]
SUB: Introduction to Event DOM 
EX: 
===================*/
let btn = document.getElementById('btn')

// btn.onclick = function(e){
//     console.log(e)
// }

let list = document.getElementById('list')
btn.addEventListener('click', function (e){
    // alert('I have Clicked')
    let item = list.lastElementChild.cloneNode(true)
    let text = 'Newly Created Item'
    item.innerHTML = text
    list.appendChild(item)
})

let box = document.getElementById('box')
box.addEventListener('mousemove', function (e){
    // console.log(e)
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY

    if(e.offsetX == 50 && e.offsetY == 50){
        alert('50 50')
    }
})