/*====================
2.For Loop
CMD: [ node 4.chapter_four/2.forloop.js ]
===================*/

//For Loop
/*
for(initializer; condition; increment ){
    
}
*/
var MyName = 0

//1
// for(var i = 0; i<100; i+=20){
//     console.log( (i + 1) + ' MD Romi')
// }

//2 
for(var i = 1; i<= 100; i++){
    if(i%2 == 1){
        console.log(i) // ODD Number[1,3,5,7] | EVEN Number[0,2,4,6,8]
    }
    
}

//3
var sum = 0
for(var i = 1; i < 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}
//4
var array = ['a', 'b', 'c'];
for (var i = 0; i < array.length; i++) {
console.log(array[i]);
}

//5
var sum = 0
var n = 5
for(var i = 0; i<=2*n-1; i+=2){
    sum +=i
}
console.log(sum);