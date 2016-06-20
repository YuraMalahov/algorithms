"use strict";

function sort(array) {
    for (let i = 1, count = array.length; i < count; i++) {
        let pick = array[i],
            j = i;

        while (pick < array[j - 1] && j > 0) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = pick;
    }
}

var a = [2,3,1,5,9,4,0,8,6,7];

sort(a);
console.log(a);