"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

function sort(array) {
    for (let i = 0, count = array.length; i < count; i++) {
        let min = i,
            j = i + 1,
            tmp;

        // *** debug ***
        console.log(array);
        // *** debug ***

        while (j < count) {
            // *** debug ***
            console.log('keys: ' + j + ' ' + min + ' values: ' + array[j] + ' ' + array[min]);
            // *** debug ***

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

sort(a);
