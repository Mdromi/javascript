/*====================
16. Error Handling
CMD: [ node 016.Chapter_sixteen/02.ifElseError.js]
SUB: Error Handling with if Else                      
EX: 
===================*/

function changeToInt(v){
    let result = Number.parseInt(v)
    if(!result){
        // console.log('Please Provide a value which is able to covert Integer')
        return 'Please Provide a value which is able to covert Integer'
    }
    return result
}

let result = changeToInt('tt4ttt')
console.log(result)