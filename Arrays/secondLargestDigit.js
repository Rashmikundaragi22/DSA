function secondLargest(str){
    let digits = str.split('').filter(char => !isNaN(char)).map(Number);
    let unicharset = [...new Set(digits)]
    console.log("unique didgits are",unicharset)
    unicharset.sort((a,b)=>b-a);
    return unicharset.length >=2 ? unicharset[1] : -1;
}
console.log(secondLargest("v4vwv2b4r3h68djs9"))
