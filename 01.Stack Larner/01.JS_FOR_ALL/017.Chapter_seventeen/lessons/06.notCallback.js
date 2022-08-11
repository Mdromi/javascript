/*====================
17. Asynchronous Programming
CMD: [ node 017.Chapter_seventeen/lessons/06.notCallback.js]
SUB: Why Not Callback    
EX: 
===================*/

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