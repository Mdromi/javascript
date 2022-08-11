const concat = function() {
    const newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i].length >= 1){
            for(let j = 0; j < arguments[i].length; j++){
                
            }
            newArr[i] = arguments[i][0]
        } else{
            newArr[i] = arguments[i]
        }
    }

    return newArr;
}

var array = [1];
const concatArr = concat(array, 2, [3], [[4]], [[5, [[6, 7]]]]);
console.log(concatArr);