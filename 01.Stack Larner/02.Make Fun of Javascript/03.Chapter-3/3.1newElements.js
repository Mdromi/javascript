/*====================
01. CHAPTER - 2
CMD: [ node 03.Chapter-3/3.1newElements.js ]
SUB: Add New Elements in Array
EX: 
===================*/

// Use push to insert at the end
const arrP1 = [1, 2, 3];
const arrP2 = [8, 9];
arrP1[arrP1.length] = 4
arrP1.push(5);
arrP1.push(6, 7);
// arrP1.push(...arrP2);
Array.prototype.push.apply(arrP1, arrP2);

// console.log(arrP1)

// Use unshift to insert at the beginning
const arrU1 = [5, 6, 7];
const arrU2 = [1, 2, 3];
arrU1.unshift(4);
// arrU1.unshift(...arrU2);
Array.prototype.unshift.apply(arrU1, arrU2);
// console.log(arrU1);

// Use Splice to insert at the given index
const arrS1 = [1, 2, 3, 5, 9];
const arrS2 = [6, 7, 8];
arrS1.splice(3, 0, 4);
arrS1.splice(5, 0, ...arrS2);
console.log(arrS1)