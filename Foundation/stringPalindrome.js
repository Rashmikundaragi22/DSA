function isPlaindrome(str){
  let newStr = str.toLowerCase()
  left = 0;
  right = newStr.length - 1;
  while(left < right){
    if(newStr[left] !== newStr[right]){
      return false;
    }
      left++;
      right--;
    }
    return true;
  }
console.log(isPlaindrome("rashmi"))
console.log(isPlaindrome("aba"))
