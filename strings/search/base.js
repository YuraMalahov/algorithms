"use strict";

var str = 'abc',
    text = 'sgsd dfabcsfdg';

function search(part, text) {
    let partLength = part.length,
        textLength = text.length - partLength;

    for (let i = 0; i <= textLength; i++) {
        let j;

        for (j = 0; j < partLength; j++) {
            if (part.charCodeAt(j) !== text.charCodeAt(i+j)) {
                break;
            }
        }

        if (j === partLength) {
            return i;
        }
    }

    return -1;
}

console.log(search(str, text));