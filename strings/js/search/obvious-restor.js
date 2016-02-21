"use strict";

var str = 'ABC',
    text = 'df AB ABC cg';

function search(part, text) {
    let i,
        j,
        partLength = part.length,
        textLength = text.length;

    for (i = 0, j = 0; i < textLength && j < partLength; i++) {
        if (text.charCodeAt(i) === part.charCodeAt(j)) {
            j++;
            continue;
        }
        i -= j;
        j = 0;
    }

    if (j === partLength) {
        return i - partLength;
    }

    return -1;
}

console.log(search(str, text));