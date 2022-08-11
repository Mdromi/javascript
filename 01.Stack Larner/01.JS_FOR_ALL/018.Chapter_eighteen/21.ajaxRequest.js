/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/21.ajaxRequest.js]
SUB: AJAX Get Request
EX: 
===================*/

let load = document.getElementById('load')
let postList = document.getElementById('posts')

const URL = 'https://jsonplaceholder.typicode.com/posts'

load.addEventListener('click',function () {
    fetch(URL)
        .then(response => response.json())
        .then(posts => {
            posts.forEach( (post, index) => {
                let listItem = listItemGenerator(post, index + 1)
                postList.appendChild(listItem)
            })
        })
        .catch(e => console.log(e.message))
})

function listItemGenerator(item, no){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${no}. ${item.title}`

    return li
}