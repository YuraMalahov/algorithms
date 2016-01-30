"use strict";

function sort(array) {
    for (let i = 0, count = array.length; i < count; i++) {
        let min = i,
            j = i + 1,
            tmp;

        while (j < count) {
            if (array[j] < array[min]) {
                min = j;
            }
            j++
        }

        tmp = array[min];
        array[min] = array[i];
        array[i] = tmp;
    }
}

var a = [2,3,1,5,9,4,0,8,6,7];

sort(a);
console.log(a);