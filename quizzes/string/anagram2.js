"use strict";

function isAnagram(str1, str2) {
    const compare = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);
    const sortedStr1 = str1.split("").sort(compare).join("");
    const sortedStr2 = str2.split("").sort(compare).join("");

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("abcd", "badc"));
console.log(isAnagram("abcda", "badc a"));
console.log(isAnagram("abcda", "ba dc a"));
console.log(isAnagram("abcdcadb", "aa bb cc dd"));
console.log(isAnagram("abc", "aa bd"));
console.log(isAnagram("", ""));
console.log(isAnagram("a", "b"));
