function taskone(str) {
    let arr = str.split(" ")
    return arr.length ;
}
// console.log(taskone('dhfbwjfnwejin wfwergweg wgwegwegwe wgwg'));
function tasktwo(arr) {
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
            arr.push(0)
            
        }
    }
    return arr;
    
}

// console.log(tasktwo([1, 2, 3, 0 , 1, 2, 3, 0]));


function task3(str) {
  if(str === str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() || str== str.toUpperCase() ||str == str.toLowerCase()){
    return 'right string'
  }else{
    return 'wrong string'
  }
}

// console.log(task3('HeMNDSFJNjnjnjSDVSF'));


function task4(str) {   
    let arr = str.split(" ")
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase())
    }
    return newarr.join(" ")
}
// console.log(task4('salam necesiniz'));

function task5(num) {

    let lastNum = num % 10;

    while (num > 10){
        num = parseInt(num / 10);
    }
    return lastNum + num;
}

// console.log(task5('123456789'));


function task6(num) {

    let newArr = []
    for (let i = 1 ; i <= num; i++) {
        if ( i % 2 ===1) {
            newArr.push(i)
        }
    }   
    return newArr;
}


// console.log(task6(3))


function task7(num) {
    for (let i = 2 ; i <= num; i++) {
        if (num % i === 0) {
           return "sade deyil"
        }else {
   return "sadedir"
        }
    }

}
console.log(task7(12));
