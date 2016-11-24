"use strict";

function sort (array) {
    let aux = array.slice();

    sort(array, aux, 0, a.length - 1);

    function sort(array, tmpArray, lowest, highest) {
        if (highest <= lowest) {
            return;
        }

        let mid = lowest + Math.floor((highest - lowest) / 2);

        sort(tmpArray, array, lowest, mid);
        sort(tmpArray, array, mid + 1, highest);
        merge(array, tmpArray, lowest, mid, highest);
    }

    function merge(array, tmpArray, lowest, middle, highest) {
        let i = lowest,
            j = middle + 1;

        for (let k = lowest; k <= highest; k++) {
            if (i > middle) {
                array[k] = tmpArray[j++];
            } else if (j > highest) {
                array[k] = tmpArray[i++];
            } else if (tmpArray[j] < tmpArray[i]) {
                array[k] = tmpArray[j++];
            } else {
                array[k] = tmpArray[i++];
            }
        }
    }
}

var a = [2,3,1,5,9,4,0,8,6,7,9,1,6,4,8,4,7];

sort(a);
console.log(a);