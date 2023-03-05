function reverseBits(n) {
	let arr = n.toString(2).split('');

  if (arr.length < 32) {
    const dif = 32 - arr.length;

    arr = [...Array(dif).fill('0'), ...arr];
  }

  arr.reverse();

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') {
      continue;
    }

    res += 2**(arr.length - 1 - i);
  }

  return res;
};

console.log(reverseBits(43261596));
