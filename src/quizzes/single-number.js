// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
  nums.sort();

  let uniq = nums[0];

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === uniq) {
          uniq = nums[i+1];
          i++
      }
  }

  return uniq;
};
