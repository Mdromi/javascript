/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/04.ajaxCallback.js]
SUB: Ajax with Callback     
EX: 
===================*/

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState == 4){
//         if(xhr.status == 200){
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }
// xhr.send()

function getRequest(url, Callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                let response = JSON.parse(xhr.response)
                Callback(null, response)
            }else{
                Callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if(err){
        console.log(err)
    } else{
        console.log(res)
        res.forEach(r => alert(r.name))
    }
})

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if(err){
        console.log(err)
    } else{
        // console.log(res)
        res.forEach(r => console.log(r.title))
    }
})