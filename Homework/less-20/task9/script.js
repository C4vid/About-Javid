let str = prompt("Bir string daxil edin: ");

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'm') {
    console.log("Success!");
    break;
  }
}