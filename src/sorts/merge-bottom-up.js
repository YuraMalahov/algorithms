"use strict";

function sort (array) {
    const aux = new Array(array.length);

    for (let size = 1, count = array.length; size < count; size += size) {
        for (let lowest = 0; lowest < count - size; lowest += size * 2) {
            const middle = lowest + size - 1;
            const highest = Math.min(lowest + size * 2 - 1, count - 1);

            merge(array, lowest, middle, highest);
        }
    }

    function merge(array, lowest, middle, highest) {
        let i = lowest;
        let j = middle + 1;

        for (let k = lowest; k <= highest; k++) {
            aux[k] = array[k];
        }

        for (let k = lowest; k <= highest; k++) {
            if (i > middle) {
                array[k] = aux[j++];
            } else if (j > highest) {
                array[k] = aux[i++];
            } else if (aux[j] < aux[i]) {
                array[k] = aux[j++];
            } else {
                array[k] = aux[i++];
            }
        }
    }
}

var a = [2,3,1,5,9,4,0,8,6,7];

sort(a);
console.log(a);