// rest parameters
function sum(...args){ 
 sum = 0;
 for (let num of args){
    if(typeof num !== 'number' || !Number.isFinite(num)){
        throw new Error("Number not Valid");
    }
    sum += num;
 }
 return sum;
}
console.log(sum(1,2,3,4,5));

// module.exports = sum; use this in online