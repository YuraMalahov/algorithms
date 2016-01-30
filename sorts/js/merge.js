"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

function sort(array, lowest, higest) {
    if (higest <= lowest) {
        return;
    }

    let mid = lowest + Math.floor((higest - lowest) / 2);

    sort(array, lowest, mid);
    sort(array, mid + 1, higest);
    merge(array, lowest, mid, higest);
}

function merge(array, lowest, middle, highest) {
    let i = lowest,
        j = middle + 1,
        aux = [];

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

sort(a, 0, a.length - 1);
console.log(a);