/*====================
CP: 03 JavaScript ES6
07.Array
CMD: [ node 03.Chapter-3/7.array.js ]
EX: 
===================*/
const nodeToArr = Array.prototype.slice.call(NodeList);
// console.log(NodeList)

const nodeToArr6 = Array.from(NodeList)
// console.log(NodeList)

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(const number of numbers){
    if(number === 5) break;
    // console.log(`Number Printed ${number}`);
}

var Numbers = [19, 23, 14, 56, 32, 65, 10, 45];
var findNum = Numbers.map((theNum) => {
    return theNum === 65;
});

console.log(findNum);

// console.log(findNum.indexOf(true));

var value = Numbers.findIndex(number => number === 65)
console.log(value)

