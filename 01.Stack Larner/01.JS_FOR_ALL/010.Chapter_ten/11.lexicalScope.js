/*====================
10. Scope and Closure
CMD: [ node 010.Chapter_ten/11.lexicalScope.js ]
SUB: Lexical Scope
EX: 
===================*/
{
    var x = 50;

    function test(){
        //var x = 10
        console.log(x) // 50

        function nested(){
            var y = 65
            console.log(x); // 50
        }
        //console.log(y); // Error
        nested();
    }

    test()
    console.log(x) // 50
}
// console.log(x) // 50