/*====================
01. CHAPTER - 2
CMD: [ node 03.Chapter-3/3.3deleteElements.js ]
SUB: Delete Elements in Array
EX: 
===================*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Remove First Element
numbers.shift();

// Remove Last Element
numbers.pop();
numbers.length = numbers.length - 1;

// Remove Inside Elements - Splice using index
numbers.splice(2, 1)

// Remove Inside Elements - Splice using value
const toBeDeleted = 5;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == toBeDeleted){
        numbers.splice(i, 1);
        break;
    }
}

// Filter Array
const toBeDeleted1 = 6;
numbers = numbers.filter((item) => item !== toBeDeleted1)

// Delete Operator
// numbers[1] = undefined;
// delete numbers[1];

// Rest Whole Array
let x = [1, 2, 3];
let y = x;
x = [];
// console.log(x, y)

// Alternative
let xx = [1, 2, 3];
let yy = xx;
// xx = [0]
xx.length = 0;
// console.log(xx, yy)

// Rest Array using while loop
while(numbers.length) numbers.pop();

console.log(numbers);

