"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

var checkCount = 0,
    replaceCount = 0;

function sort(array) {
    for (let i = 1, count = array.length; i < count; i++) {
        let pick = array[i],
            j = i;

        while (pick < array[j - 1] && j - 1 >= 0) {
            array[j] = array[j - 1];
            j--;

            // *** debug ***
            replaceCount++;
            checkCount++;
            // *** debug ***
        }

        array[j] = pick;
    }
}

console.log(a);
sort(a);
console.log(a);

console.log('checks', checkCount);
console.log('replaces', replaceCount);
