let arr = [5, 2, 8, 12, 3, 7, 9, 1, 6, 4];

arr1 = arr.map(x => x * 2);
console.log(arr1);
function bigTolittle(a, b){
    return b - a
}
arr2 = arr1.sort(bigTolittle);
console.log(arr2);

let newArr = arr2.slice(1, 3);
console.log(newArr);