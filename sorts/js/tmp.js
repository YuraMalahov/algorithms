"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

var checkCount = 0,
    replaceCount = 0;

function sort(array) {
    let count = array.length,
        step = 1,
        border = Math.floor(count / 3);

    while (step <= border) {
        step = step * 3 + 1;
    }

    while (step >= 1) {
        for (let i = step; i < count; i++) {
            for (let j = i; j >= step && array[j] < array[j - step]; j -= step) {
                let tmp = array[j];
                array[j] = array[j - step];
                array[j - step] = tmp;
            }
        }

        step = Math.floor(step / 3);
    }
}

console.log(a);
sort(a);
console.log(a);

console.log('checks', checkCount);
console.log('replaces', replaceCount);
