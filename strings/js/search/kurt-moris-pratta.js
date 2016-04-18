"use strict";

var str = 'ABACBAC',
  text = 'df AB AAABACABBABACB -- 27"ABACBAC" -- cg';

function search(part, text) {
  let i, j, partLength = part.length, textLength = text.length,
    dfa = createDfa(part),
    keys = Object.keys(dfa);

  for (i = 0, j = 0; i < textLength && j < partLength; i++) {
    if (keys.indexOf(text.charAt(i)) === -1) {
      j = 0;
      continue;
    }
    j = dfa[text.charAt(i)][j];
  }

  if (j === partLength) {
    return i - partLength;
  }
  return -1;
}

function createDfa(part) {
  let partLength = part.length, dfa = {};

  for (let j = 0; j < partLength; j++) {
    let char = part.charAt(j), zero = 0;

    if (!dfa[char]) {
      dfa[char] = [zero];
    }
    for (let i = 0; i < partLength; i++) {
      if (char === part.charAt(i)) {
        dfa[char][i] = i + 1;
        continue;
      }
      dfa[char][i] = dfa[char][zero];
    }
  }

  return dfa;
}

console.log(search(str, text));
