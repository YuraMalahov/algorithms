"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

var checkCount = 0,
    replaceCount = 0;

function sort(array) {
    for (let i = 0, count = array.length; i < count; i++) {
        let min = i,
            j = i + 1,
            tmp;

        while (j < count) {
            // *** debug ***
            checkCount++;
            // *** debug ***

            if (array[j] < array[min]) {
                min = j;
            }
            j++
        }

        // *** debug ***
        replaceCount++;
        // *** debug ***

        tmp = array[min];
        array[min] = array[i];
        array[i] = tmp;
    }
}

console.log(a);
sort(a);
console.log(a);

console.log('checks', checkCount);
console.log('replaces', replaceCount);
