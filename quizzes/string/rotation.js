"use strict";

function isRotation(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    
    const doubleString = string1 + string1;
    
    return isSubstring(doubleString, string2);
}

function isSubstring(string1, string2) {
    return string1.match(string2) !== null;
}

console.log(isRotation("abcde", "cdeab"));
console.log(isRotation("aaaabbbb", "aabbbbaa"));
console.log(isRotation("aaaabbbb", "cccc"));
