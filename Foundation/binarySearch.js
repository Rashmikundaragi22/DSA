function search(nums,target){
    let left =0;
    let right = nums.length -1;
    while( left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }
        if (nums[mid]< target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}
console.log(search([2,3,6,7,8], 4))
console.log(search([2,3,5,7,8], 7))
