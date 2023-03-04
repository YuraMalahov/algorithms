/*
Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
*/

function canBeIncreasing(nums) {
  console.log(nums);

  let errors = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length && errors < 2; ++i) {
    if (prev >= nums[i]) {
      ++errors;

      if (i > 1 && nums[i - 2] >= nums[i]) {
        prev = nums[i - 1];
        continue;
      }
    }
    prev = nums[i];
  }

  return errors < 2;
};

const rand = () => +(Math.random() * 100).toFixed();

console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));
console.log(canBeIncreasing([rand(), rand(), rand(), rand()]));


