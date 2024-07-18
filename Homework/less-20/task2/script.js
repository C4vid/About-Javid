let arr = [5, "helu", true, null , "necesen", 5.95];


for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      console.log(arr[i]);
    }
}