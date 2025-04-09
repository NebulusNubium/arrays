function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7]
console.log(mergeArrays(arr1, arr2))