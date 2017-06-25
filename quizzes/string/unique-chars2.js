"use strict";

/**
 *
 * @param str {string}
 * @returns {boolean}
 */
function hasUniqueChars(str) {
    const chars = str.split("");

    chars.sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    });

    for (let i = 0, len = chars.length-1; i < len; i++) {
        if (chars[i] === chars[i+1]) {
            return false;
        }
    }
    
    return true;
}

console.log(hasUniqueChars("abcd"));
console.log(hasUniqueChars("abcdb"));
console.log(hasUniqueChars(""));
console.log(hasUniqueChars("abcdfa"));
