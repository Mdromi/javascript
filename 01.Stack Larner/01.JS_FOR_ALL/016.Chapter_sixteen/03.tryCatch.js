/*====================
16. Error Handling
CMD: [ node 016.Chapter_sixteen/03.tryCatch.js]
SUB: Error Handling with Try Catch                 
EX: 
===================*/

function makeWords(text){

    try{

        let str = text.trim()
        let words = str.split(' ')
        return words

    }catch(e){
        console.log(e.message)
        console.log('Please Provide a valid Text')
    }

    // let str = text.trim()
    // let words = str.split(' ')
    // return words
}

// let words = makeWords('         I am MD Romi            ')
let words = makeWords(3)
console.log(words)