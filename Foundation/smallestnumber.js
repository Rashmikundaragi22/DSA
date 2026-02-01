function findSmallest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }
  let min = arr[0];
  for (let i = 0; i < arr.length;i++) {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
      return false;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min
}
console.log(findSmallest([3, 1, 4, 1, 5, 9]));
console.log(findSmallest([-7, -1, -5, -3]));
console.log(findSmallest([]));
console.log(findSmallest("not an array"));  
