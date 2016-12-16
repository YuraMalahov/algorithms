"use strict";

function sort(array) {
    let needSort = true;
    let len = array.length;
    let rightShift = 0;

    while (needSort) {
        let rightBorder = len - 1 - rightShift;
        needSort = false;

        for (let i = 0; i < rightBorder; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                needSort = true;
            }
        }

        rightShift++;
    }
}

let a = [2, 3, 8, 9, 1, 5, 0, 6, 4, 7];
sort(a);
console.log(a);
