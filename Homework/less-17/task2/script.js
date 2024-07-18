function findNumber(a, b) {
    if(b < a){
        for (let i = 0; i <= b; i++) {
            if(i == b && i < a){
                console.log(i + ' cəhddə tapıldı və' + b + ' səhifəsinə aiddir');
            }   
        }
    }else{
        console.log('seçəcəyiniz səhifə kitabın səhifəsindən çoxdur');
    }
} 

findNumber(47, 3);

//
function createArray(start, end, a) {
    const sequence = [];
    let current = start;
  
    while (current <= end) {
      sequence.push(current);
      current++;
    }

    if (sequence.includes(a)) {
    console.log(a+ ' tapildi');
    } else {
    console.log(a+ ' tapilmadi');
    }
        
  
    return sequence;
}
createArray(0, 0, 0)