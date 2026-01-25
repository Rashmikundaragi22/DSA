function isPalindrome(num){
const n = num;
if( num < 0 || num > 2**31-1){
return false;
}
let rev =0;
while(num > 0){
 let digit = num%10;
 rev = rev * 10 + digit;
 num = parseInt(num/10)
}
if( rev === n){
return true;
}
return false;
}
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))