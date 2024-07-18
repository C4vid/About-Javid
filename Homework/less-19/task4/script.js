let arr = [3, 5, 1, 7, 9];

console.log(arr);

function cem(total, value) {
    return total + value;
}

let sum = arr.reduce(cem);
console.log("Cəm: " + sum);

function cem(total, value) {
    return total + value;
}


function bigTolittle(a, b){
    return b - a
}
function ferq(total, value) {
    return total - value;
}
arr2 = arr.sort(bigTolittle);

let diff = arr2.reduce(ferq);
console.log("Fərq: " + diff);

arr.push(sum, diff);

function setArr(a, b){
    return a - b
}

arr.sort(setArr);  
console.log("Nəticə: " + arr);
