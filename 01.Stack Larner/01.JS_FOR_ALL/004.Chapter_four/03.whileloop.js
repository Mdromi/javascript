/*====================
02. LOOP
CMD: [ node 004.Chapter_four/03.whileloop.js ]
SUB: While Loop
EX: 
===================*/

var i = 0
while(i<10){
    console.log('MD Romi')
    i++
}

//2
var i = 10;
while (i > 0) {
console.log(i);
i--; /* equivalent to i=i-1 */
}

//3
var isRunning = true
while(isRunning){
    var rand = Math.floor(Math.random() * 10 +1)
    if(rand == 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }else{
        console.log('You have got ' + rand )
    }
}