let str1 = "";
let str2 = "";

function mergeStrings() {
  str1 = document.getElementById("inputFirst").value;
  str2 = document.getElementById("inputSecond").value;
  let substr1 = str1.substring(3, 6); 
  let substr2 = str2.substring(1, 4); 
  let newStr = substr1 + substr2; 
  newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
  console.log(newStr);
}

document.getElementById("mergeWords").addEventListener("click", mergeStrings);