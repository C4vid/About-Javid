let arr1 = [12345, 12345, 12345];
let arr2 = [12345, 12345, 12345];

function checkLength(elem) {
  return elem.every(num => num.toString().length === 5);
}

let newArr = [arr1, arr2];
let isValid = newArr.every(checkLength);

// console.log(isValid);

if (isValid) {
  console.log("successful validation");
} else {
  console.log("The length of elements is not equal to five");
}