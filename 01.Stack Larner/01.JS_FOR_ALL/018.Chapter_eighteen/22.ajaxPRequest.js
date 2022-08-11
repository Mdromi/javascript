/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/22.ajaxPRequest.js]
SUB: AJAX Post Request
EX: 
===================*/

let postForm = document.getElementById('post-form')
let posts = document.getElementById('postss')

const URL = 'https://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function(e){
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if(title && body){
        let postObj = {
            userId: 100,
            title,
            body
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenerator(post)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))

    } else {
        alert('Please Provide Every Details')
    }
})

function listItemGenerator(item){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By User Id - ${item.userId}`

    return li
}

// VIDEO - 217 !im[portant part DOM

// Canvas
// Svg 
// Drag Drop 
// Transition
// Location 
// Audio, Video
// Speech Recognition 
// Web Socket 
// Local Storage, Cookies, and Browser Databases
