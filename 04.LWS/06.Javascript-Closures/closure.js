/**
 * Closure আসলে কিছূই না, সে আসলে একটা ফাংশন with some remaiber values। এই value গুলো তার নিজের scope এর  ভিতর নেই, সে অন্য যায়গা/scope হতে reference নিয়ে আসে।
 * 
 * In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
 *  */

function stopWatch(){
    var startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

for(var i = 0; i < 1000000000; i++){
    var a = Math.random() * 1000000;
}

timer();
console.log(timer);

timer = null;
timer();