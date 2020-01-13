"use strict";


/**
 *
 * @param str {string}
 * @returns {number[]}
 */
function buildCharTable(str) {
    const SPACE = " ".charCodeAt(0);
    const table = new Array(256).fill(0);
    let charCode;

    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        if (SPACE === charCode) {
            continue;
        }

        table[charCode]++;
    }

    return table;
}

/**
 *
 * @param firstString {string}
 * @param secondString {string}
 * @returns {boolean}
 */
function isAnagram(firstString, secondString) {
    const table1 = buildCharTable(firstString);
    const table2 = buildCharTable(secondString);
    
    for (let i = 0; i < table1.length; i++) {
        if (table1[i] !== table2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("abcd", "badc"));
console.log(isAnagram("abcda", "badc a"));
console.log(isAnagram("abcda", "ba dc a"));
console.log(isAnagram("abcdcadb", "aa bb cc dd"));
console.log(isAnagram("abc", "aa bd"));
console.log(isAnagram("", ""));
console.log(isAnagram("a", "b"));
