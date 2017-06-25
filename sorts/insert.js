"use strict";

function sort(array) {
    for (let i = 1, len = array.length; i < len; i++) {
        for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
            [array[j], array[j-1]] = [array[j-1], array[j]];
        }
    }
}

let a = [2, 3, 8, 9, 1, 5, 0, 6, 4, 7];
sort(a);
console.log(a);
