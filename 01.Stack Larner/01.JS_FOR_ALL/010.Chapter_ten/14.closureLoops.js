/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/14.closureLoops.js]
SUB: Closure and Loops
EX: 
===================*/

for(var i = 1; i <=5; i++){
    (function(n){
        setTimeout(function(){
            console.log(n);
        }, 1000 * n);
    })(i)
}