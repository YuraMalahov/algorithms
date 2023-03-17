function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  if (first[0] !== last[0]) {
    return '';
  }

  const prefix = [first[0]];
  let i = 1;

  while (first[i] && last[i] && first[i] === last[i]) {
    prefix.push(first[i]);
    i++;
  }

  return prefix.join('');
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix([""]));
