/*====================
16. Error Handling
CMD: [ node 016.Chapter_sixteen/07.customError.js]
SUB: Custom Error           
EX: 
===================*/

class CustomError extends Error{
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try{
    console.log('I am line 1')
    throw new CustomError('I am your Error')
    console.log('I am line 2')
    console.log('I am line 3')
}catch(e){
    console.log(e.message)
    console.log('This is a custom Error Message')
}finally{
    console.log('I am Finally Block')
}