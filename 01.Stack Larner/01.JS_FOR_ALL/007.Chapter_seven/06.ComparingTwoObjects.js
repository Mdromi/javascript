/*====================
05. Objects
CMD: [ node 007.Chapter_seven/06.ComparingTwoObjects.js ]
SUB: Comparing Two Objects
EX: 
===================*/
//1
var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}

//console.log(obj1 === obj2);  // false

// 2
if(obj1.a === obj2.a && obj1.b === obj2.b)
{
    console.log(true);
}
else{
    console.log(false);
}

//3
console.log(obj1); // { a: 10, b: 20 }
console.log(JSON.stringify(obj1)); //{"a":10,"b":20}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
console.log(obj1);