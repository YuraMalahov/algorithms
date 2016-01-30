"use strict";

function less(a, i, j) {
    return a[i] < a[j];
}

function exch(a, i, j) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

function sink(a, k, N) {
    while (k*2 <= N) {
        let j = k*2;

        if (j < N && less(a, j, j+1)) j++;
        if (!less(a, k, j)) break;

        exch(a, k, j);
        k = j;
    }
}

function sort(array) {
    let N = array.length-1;

    for (let k = Math.floor(N/2); k >= 0; k--) sink(array, k, N);
    while (N > 0) {
        exch(array, 0, N--);
        sink(array, 0, N);
    }
}

var a = [2, 4, 6, 3, 1, 8, 5, 7, 9, 0];
sort(a);
console.log(a);