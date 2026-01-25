// function checks if string has unique characters
function uniqString(str){
    for(let i=0; i< str.length; i++){
        for(let j=i+1; j< str.length; j++){
           if(str[i] === str[j]){
            console.log(`Has duplicate character '${str[i]}' at positions ${i} and ${j}`);
            return false
           }
        }
    }
    console.log("has Unique characters");
    return true;
}
console.log(uniqString("helloo"));