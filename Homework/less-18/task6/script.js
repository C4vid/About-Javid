let str1 = "";
let str2 = "";

function mergeStrings() {
  str1 = document.getElementById("inputFirst").value;
  str2 = document.getElementById("inputSecond").value;
  let substr1 = str1.length; 
  let substr2 = str2.length;
  
  if(substr1 > substr2 ){
    console.log(str1);
  }else if(substr2 > substr1 ){
    console.log(str2);
  }else console.log(str1 + '=='+ str2);
}

document.getElementById("mergeWords").addEventListener("click", mergeStrings);z