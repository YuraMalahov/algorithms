"use strict";

/**
 * 
 * @param str {string}
 * @returns {string}
 */
function replaceSpaces(str) {
    const chars = str.split("");
    let len = str.length;
    let spaces = 0;
    
    chars.forEach(function (char) {
        if (char === " ") {
            spaces++;
        }
    });

    let newLen = len + spaces * 2;
    chars.length = newLen;
    newLen--;
    for (let i = len-1; i >= 0; i--) {
         if (chars[i] === " ") {
             chars[newLen] = "0";
             chars[newLen - 1] = "2";
             chars[newLen - 2] = "%";
             newLen -= 3;
         } else {
             chars[newLen--] = chars[i];
         }
    }

    return chars.join("");
}

console.log(replaceSpaces("aa bb cc"));
console.log(replaceSpaces("aa bb cc "));
console.log(replaceSpaces("  "));
