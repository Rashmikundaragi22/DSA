function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let num of arr) {
    if (typeof num !== 'number' || !Number.isFinite(num)) {
      return false;
    }
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findLargest([3, 1, 4, 1, 5, 9]));
console.log(findLargest([-7, -1, -5, -3]));
console.log(findLargest([]));
console.log(findLargest("not an array"));   
module.exports = { findLargest };
