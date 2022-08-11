
const chunk = (arr,  lengthOfEachChunk) => {
    const arrLength = arr.length;
    let currentChank = 1;
    let tempArr = [], chankArr = [];

    for(let i = 0; i < arrLength; i++){
        currentChank++;
        tempArr.push(arr[i]);
        
        if (currentChank > lengthOfEachChunk || (arrLength - i) == 1){
            currentChank = 1;
            chankArr.push(tempArr);
            tempArr = [];
        }
    }

    return chankArr;
}

var c = ['a', 'b', 'c', 'd'];
var a = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]

const newChank = chunk(a, 3);
console.log(newChank);