function negativeNumbers(arr){
    let count =0;
    if(!Array.isArray(arr)){
        return false
    }
    for (let i = 0; i< arr.length; i ++){
        if(typeof arr[i] !== 'number' || !Number.isFinite(arr[i])){
            return false
        }
        if(arr[i] < 0){
            count++;
        }   
    }
    return count;
}
console.log(negativeNumbers([1,-2,3,-4,-5]))
console.log(negativeNumbers([1,2,3,4,5]))