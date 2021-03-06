"use strict";

function sort (array) {
    let aux = [];

    sort(array, 0, a.length - 1);

    function sort(array) {
        for (let size = 1, len = array.length; size < len; size += size) {
            for (let lowest = 0; lowest < len - size; lowest += size + size) {
                merge(array, lowest, lowest+size-1, Math.min(lowest+size+size-1, len-1));
            }
        }
    }

    function merge(array, lowest, middle, highest) {
        let i = lowest,
            j = middle + 1;

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