const compact = (arr) => {
    const filterArray = arr.filter(function (v) {
        if (v === 0){
            return false
        }
        return typeof v == 'number';
    });
    return filterArray;
}

const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
const arr2 = [0, 1, false, 2, '', 3]
const compactArr = compact(arr2)
console.log(compactArr);