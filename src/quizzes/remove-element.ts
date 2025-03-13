function removeElement(nums: number[], val: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    while (nums[start] === val && start <= end) {
      const tmp = nums[end];
      nums[end] = nums[start];
      nums[start] = tmp;
      end--;
    }

    if (start > end) {
      break;
    }

    start++;
  }

  return start;
};
