/*====================
16. Error Handling
CMD: [ node 016.Chapter_sixteen/06.optionalCarch.js]
SUB: Optional Carch Binding            
EX: 
===================*/

try{
    console.log('I am line 1')
    throw new Error('I am your Error')
    console.log('I am line 2')
    console.log('I am line 3')
}catch(e){
    console.log(e.message)
}finally{
    console.log('I am Finally Block')
}