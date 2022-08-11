/*====================
01. CHAPTER - 2
CMD: [ node 02.Chapter-2/2.3traverseArray.js ]
SUB: Traverse Array Elements
EX: 
===================*/

const arr = [31, 45, 69, 22, 35, 74, 59, 22];
const n = arr[3];
const m = arr[2];
const x = 1, y = 0;
// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);


// Simple Traverse
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

// Array Sum & Avg
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)
console.log(sum / arr.length)

// Find Large or minium Number
let largestNumber = arr[0], seclarge;
let minNumber = arr[0], secmin;

for(let i = 1; i < arr.length; i++){
    if(arr[i] > largestNumber){
        seclarge = largestNumber;
        largestNumber = arr[i];
    }
    if(arr[i] < minNumber){
        secmin = minNumber;
        minNumber = arr[i];
    }
}
console.log('Large Number:', largestNumber, 'Sec Large Number:', seclarge);
console.log('Minimum Number:', minNumber, 'Sec Minimum Number:', secmin);