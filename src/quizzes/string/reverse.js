"use strict";

/**
 * 
 * @param str {string}
 * @returns {string}
 */
function reverse(str) {
    const reverseChars = [];

    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        reverseChars[i] = str[j];
        reverseChars[j] = str[i];
    }
    
    return reverseChars.join("");
}

console.log(reverse("abcdef"));
console.log(reverse("abcde"));
console.log(reverse("a"));
console.log(reverse(""));
