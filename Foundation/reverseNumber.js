function reverse(num){
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
    if( num > INT_MAX  || num < INT_MIN ){
        return 0;
    }
    let rev =0;
    while(num !== 0){
        let digit = num%10;
        rev = rev * 10 + digit;  
        num = Math.trunc(num/10);
 
    }
    return rev;
}
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
