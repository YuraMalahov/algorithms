"use strict";

function sort(array) {
    //copy array
    let aux = array.slice();
    
    sort(array, aux, 0, a.length - 1);

    function sort(array, aux, lowest, highest) {
        if (highest <= lowest) {
            return;
        }

        // use insert sort for small parts
        if (array.length < 15) {
            insertSort(array);
            return;
        }

        let mid = lowest + Math.floor((highest - lowest) / 2);

        sort(aux, array, lowest, mid);
        sort(aux, array, mid + 1, highest);
        merge(array, aux, lowest, mid, highest);
    }

    function merge(array, aux, lowest, middle, highest) {
        let i = lowest,
            j = middle + 1;

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

function insertSort(array) {
    let len = array.length;

    for (let i = 1; i < len; i++) {
        if (array[0] > array[i]) {
            [array[0], array[i]] = [array[i], array[0]];
        }
    }

    let pick;
    let j;

    for (let i = 1; i < len; i++) {
        pick = array[i];
        j = i;
        for (; pick < array[j-1]; j--) {
            array[j] = array[j-1];
        }

        array[j] = pick;
    }
}


var a = [2,3,1,5,9,4,0,8,6,7,2,3,1,5,9,4,0,8,6,7,2,3,1,5,9,4,0,8,6,1];

sort(a);
console.log(a);