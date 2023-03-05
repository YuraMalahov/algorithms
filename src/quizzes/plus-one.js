function plusOne(digits) {
  let index = digits.length - 1;

  while (index > -1) {
      digits[index]++;

      if (digits[index] > 9) {
          digits[index] = 0
      } else {
          break;
      }

      index--;
  }

  if (digits[0] === 0) {
      digits.unshift(1);
  } 

  return digits;
};

console.log(plusOne([1]))
console.log(plusOne([9]))
console.log(plusOne([1,2,3]))
console.log(plusOne([9,9,9]))
console.log(plusOne([2,9,9]))
console.log(plusOne([2,9,9]))
