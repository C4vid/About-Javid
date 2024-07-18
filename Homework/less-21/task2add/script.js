let resultElement = document.getElementById("result");
function changeColor() {
  let str = document.getElementById("inputText").value;
  let clr = document.getElementById("inputColor").value;
  let fs = document.getElementById("inputNumber").value;
  resultElement.style.color = clr;
  resultElement.style.fontSize = fs + "px";
  resultElement.textContent = str;
}

document.getElementById("bttn").addEventListener("click", changeColor);