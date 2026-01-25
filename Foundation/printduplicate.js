// To print duplicate values of the string
function printDuplicates(str){
    let duplicate = [];
    for (let i= 0; i< str.length; i++){
        for (let j= i +1; j< str.length; j++){

                if(str[i]=== str[j]){
                    duplicate.push(str[i]);
                }
            
        }
    }
    if(duplicate.length > 0){
        console.log("duplicates are",duplicate.join(","));
        return duplicate;
    }
}
console.log(printDuplicates("helloo"));