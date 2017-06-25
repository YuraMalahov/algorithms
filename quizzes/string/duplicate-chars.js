"use strict";

function removeDuplicates(str) {
    let i = 0;
    while (i < str.length) {
        let j = i+1;
        while (j < str.length) {
            if (str[i] !== str[j]) {
                j++;
                continue;
            }

            str = str.slice(0, j) + str.slice(j+1, str.length);
        }

        i++;
    }

    return str;
}


console.log(removeDuplicates("abcdee"));
console.log(removeDuplicates("abcdcee"));
console.log(removeDuplicates("aabcdcebe"));
console.log(removeDuplicates(""));
console.log(removeDuplicates("a"));
console.log(removeDuplicates("aa"));
