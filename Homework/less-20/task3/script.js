let arr = ["Salam", "Necesiz", "Matrix", "Java", "Coni"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Matrix") {
      arr.splice(i, 1);
      i--;
    }
  }