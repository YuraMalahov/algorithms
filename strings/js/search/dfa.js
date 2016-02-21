"use strict";

var str = 'ABC',
    text = 'df AB AAABAABBABACB ABC cg';

function search(part, text) {
    let i, j, partLength = part.length, textLength = text.length,
        dfa = {
            'A': [1, 1, 1],
            'B': [0, 2, 0],
            'C': [0, 0, 3]
        };

    for (i = 0, j = 0; i < textLength && j < partLength; i++) {
        if (Object.keys(dfa).indexOf(text.charAt(i)) === -1) {
            continue;
        }
        j = dfa[text.charAt(i)][j];
    }

    if (j === partLength) {
        return i - partLength;
    }
    return -1;
}

console.log(search(str, text));