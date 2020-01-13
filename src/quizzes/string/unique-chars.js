"use strict";

/**
 *
 * @param str {string}
 * @returns {boolean}
 */
function hasUniqueChars(str) {
    const table = new Array(256);

    for (let i = 0, len = str.length; i < len; i++) {
        const charCode = str.charCodeAt(i);
        if (table[charCode]) {
            return false;
        }
        
        table[charCode] = true;
    }
    
    return true;
}

console.log(hasUniqueChars("abcd"));
console.log(hasUniqueChars("abcdb"));
console.log(hasUniqueChars(""));
