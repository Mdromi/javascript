const isArray = (arr) => {
    let arrResult = Array.isArray(arr)

    return arrResult;
}

let newArrs = [];

const arrPush = (arr) => {
    newArrs.push(arr)
}

const arrSlice = (arr) => {
    let arrlength = arr.length;
    // console.log(arr)

    // [5, [[[6, 7, [8]]]]]

    let arrCount = [];

    for(let i = 0; i < arrlength; i++){
        let result = isArray(arr[i])

        if(result){
            // concat(arr[i])
            arr[i].length == 1 && !isArray(arr[i][0]) ? arrPush(arr[i]) : arrSlice(arr[i])
        } else {
            arrPush(arr[i])
        }
    }

}



let concat = function() {
    for (let i = 0; i < arguments.length; i++) {

        let arr = arguments[i];
        let arrResult = isArray(arr)
        // console.log(arrResult)

        if(arrResult){
            arrSlice(arr)
             
        }else{
            arrPush(arr);
        }
    }

    return newArrs;
}

var array = [1, 2, 3, 4, 5];
const concatArr = concat(array, 2, [3], [[4]], [[5, [[[6, 7, [8]]]]]]); // [1, 2, 3, [4], [5, [6,7]]]


console.log(concatArr);