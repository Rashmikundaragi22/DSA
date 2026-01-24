function printascending(){
    let char = [1,7,8,3,31,8,10,3];
    char.sort((a,b)=>b-a)
    console.log("Ascending order",char);
    return char;
}
console.log(printascending());