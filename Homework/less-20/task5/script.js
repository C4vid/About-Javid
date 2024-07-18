let arr = [1, 12, 123, 1234, 12345, 123456];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let num = arr[i];
    while (num > 0) {
      num = parseInt(num / 10);
      count++;
    }
    console.log(arr[i] + ' ədədi ' + count + 'rəqəmlidir'  );
  }