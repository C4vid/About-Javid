
function numOne(a, b){
    if(a > b){
        console.log( a + ' '+ ' boyukdur');
    }else if(b > a){
        console.log( b + ' ' +'boyukdur');
    }else{
        console.log('Beraberdirler');
    }
}
numOne(11, 7)

function numOne(a, b){
    if(a > b){
        return a + ' '+ ' boyukdur';
    }else if(b > a){
        return  b + ' ' +'boyukdur';
    }
    return 'Beraberdirler';
    
}
console.log(numOne(5, 10));
