function comparison(a, b, c){
    console.log('a =' + ' ' + a);
    console.log('b =' + ' ' + b);
    console.log('c =' + ' ' + c);
    if(a == b && b == c){
        console.log('Butun ededler beraberdir');
    }else if(a >= b && a >= c){
        if(a > b && a > c){
            console.log( 'a' + ' '+ 'en boyukdur');
        }else if( a == b && a > c) {
            console.log( 'a' + ' və '+ 'b' + ' beraberdir' + ' ' + 've en boyukdurler');
        }else if( a == c && a > b) {
            console.log( 'a' + ' və '+ 'c' + ' beraberdir' + ' ' + 've en boyukdurler');
        }
    }else if(b >= a && b >= c ){
        if(b > a && b > c){
            console.log( 'b' + ' '+ 'en boyukdur');
        }else if( a == b && b > c) {
            console.log( 'b' + ' və '+ 'a' + ' beraberdir' + ' ' + 've en boyukdurler');
        }else if( b == c && b > a) {
            console.log( 'b' + ' və '+ 'c' + ' beraberdir' + ' ' + 've en boyukdurler');
        }
    }else if(c >= a && c >= b ){
        if(c > a && c > b){
            console.log( 'c' + ' '+ 'en boyukdur');
        }else if( c == a && c > b) {
            console.log( 'c' + ' və '+ 'a' + ' beraberdir' + ' ' + 've en boyukdurler');
        }else if( c == b && c > a) {
            console.log( 'c' + ' və '+ 'b' + ' beraberdir' + ' ' + 've en boyukdurler');
        }
    }else('Get sehvini duzelt')
}
comparison(15, 3, 15)