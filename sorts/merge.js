"use strict";

function sort (array) {
    let aux = [];

    sort(array, 0, a.length - 1);

    function sort(array, lowest, highest) {
        if (highest <= lowest) {
            return;
        }

        let mid = lowest + Math.floor((highest - lowest) / 2);

        sort(array, lowest, mid);
        sort(array, mid + 1, highest);
        merge(array, lowest, mid, highest);
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