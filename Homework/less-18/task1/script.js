// function deleteString() {
//     const elem = document.getElementById("StringOne").value.trimStart();
//     document.getElementById("result").innerHTML = "Result: " + '*'+elem + '*';
// }

function deleteString(text1) {
    const elem = text1.trim();
    return elem;
}
console.log(deleteString(     "     dfwdfwf     "    ));
