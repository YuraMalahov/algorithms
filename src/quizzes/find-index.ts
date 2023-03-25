function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start)/2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid-1;
    } else {
      start = mid+1;
    }
  }

  return start;
};

let arr:number[] = [];
console.log(searchInsert(arr, 3))

arr = [1];
console.log(searchInsert(arr, 3))

arr = [2];
console.log(searchInsert(arr, 1))

arr = [2];
console.log(searchInsert(arr, 2))

arr = [2];
console.log(searchInsert(arr, 3))

arr = [1, 3, 5];
console.log(searchInsert(arr, 4))

arr = [1,3,5,6];
console.log(searchInsert(arr, 2))

arr = [1,3];
console.log(searchInsert(arr, 2))

arr = [1,3, 5, 7];
console.log(searchInsert(arr, 4))