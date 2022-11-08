/*====================
CP: 03 JavaScript ES6
8.Spread
CMD: [ node 03.Chapter-3/8.spread.js ]
EX: 
===================*/

var numbers = [1, 2, 3, 4];
function calculate(a, b, c, d){
    console.log(`Sum: ` + (a + b + c + d));
}
// calculate(...numbers);

var arrName = [`Rahim`, 'Karim', 'Rafiq', 'Jabbar'];
arrName.unshift(`Shafiq`);
arrName.push(`Salam`);
// console.log(arrName)

const arrName6 = [`Bangladesh`, ...arrName, `Language`];
// console.log(arrName6)

var arrOne = [0, 1, 2, 3, 4];
var arrTwo = [5, 6, 7, 8, 9];
arrOne = arrOne.concat(arrTwo);
// console.log(arrOne)

let arrOne6 = [0, 1, 2, 3, 4];
let arrTwo6 = [5, 6, 7, 8, 9];

arrOne6 = [...arrOne6, ...arrTwo6];
console.log(arrOne6)