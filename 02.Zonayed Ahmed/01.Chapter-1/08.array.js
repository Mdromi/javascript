/*====================
08. Array
CMD: [ node 01.Chapter-1/08.array.js ]
EX: 
===================*/

var arrayName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
// console.log(arrayName)

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
// console.log(arrName)
// console.log(arrName[3])

// arrName[3] = 'Safiq'
// console.log(arrName[3])

// console.log(arrName.length) // 4
// console.log(arrName['length']) // 4

for(var i = 0; i < arrName.length; i++)
{
    // console.log(`Name: ` + arrName[i]);
}

// Some Method
arrName.push('Safiq')
console.log(arrName)

arrName.pop()
console.log(arrName)

arrName.shift()
console.log(arrName)

arrName.unshift('Shafiq')
console.log(arrName)

console.log(arrName.indexOf('Karim'))

arrName.splice(1, 2);
// console.log(arrName)

arrName.splice(3)
console.log(arrName)

var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var spliceArray = newArr.splice(3)
console.log(spliceArray)
console.log(newArr)