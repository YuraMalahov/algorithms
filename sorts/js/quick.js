"use strict";

function exch(a, i, j) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

function sort(array, lowest, highest) {
    if (highest <= lowest) return;

    let j = partition(array, lowest, highest);
    sort(array, lowest, j-1);
    sort(array, j+1, highest);
}

function partition(array, lowest, highest){
    let i = lowest,
        j = highest + 1,
        center = array[lowest];

    while (true) {
        while (array[++i] < center) if (i === highest) break;
        while (array[--j] > center) if (j === lowest) break;
        if (i >= j) break;

        exch(array, i, j);
    }
    exch(array, lowest, j);

    return j;
}

var a = [2,3,1,5,9,4,0,8,6,7];
sort(a, 0, a.length-1);
console.log(a);
