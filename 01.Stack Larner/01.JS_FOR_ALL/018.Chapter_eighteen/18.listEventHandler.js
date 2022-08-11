/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/18.listEventHandler.js]
SUB: List and Input Event Handler
EX: 
===================*/

// This Function Create HTML List Allements
let btn = document.getElementById('btn')
let list = document.getElementById('list')
btn.addEventListener('click', function (e){
    let item = list.lastElementChild.cloneNode(true)
    let text = 'Newly Created Item'
    item.innerHTML = text
    list.appendChild(item)
})

// This Function Edit HTML List Allements
// let list = document.getElementById('list')
list.addEventListener('dblclick', function (event){
    if(this.contains(event.target)){
        let innerText = event.target.innerHTML
        event.target.innerHTML = ''
        let inputBox = createInputBox(innerText)
        event.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function (e){
            if(e.key == 'Enter'){
                event.target.innerHTML = e.target.value
            }
        })
    }
})

function createInputBox(value){
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value
    
    return inp
}