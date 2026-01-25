// Check if two strings are permutations of each other
function checkPermute(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let count = {};
    for (let ch of str1){
        count[ch] = (count[ch] || 0 ) + 1;
    }
    for (let ch of str2){
        if(!count[ch]){
            return false;
        }
        count[ch] --;
    }
    return true;
}
console.log(checkPermute("abc","bca"))
console.log(checkPermute("abc","bcaa"))
