"use strict";

var a = [2,3,1,5,9,4,0,8,6,7];

var checkCount = 0,
    replaceCount = 0;

function sort(array, lowest, highest) {
    if (highest <= lowest) return;

    let j = partition(array, lowest, highest);
    sort(array, lowest, j-1);
    sort(array, j+1, highest);
}

function partition(array, lowest, highest){
    let i = lowest,
        j = highest + 1,
        center = array[lowest],
        tmp;

    while (true) {
        while (array[++i] < center) if (i === highest) break;
        while (array[--j] > center) if (j === lowest) break;

        if (i >= j) break;

        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    tmp = array[lowest];
    array[lowest] = array[j];
    array[j] = tmp;

    return j;
}

console.log('start ', a);
sort(a, 0, a.length-1);
console.log('end ', a);

console.log('checks', checkCount);
console.log('replaces', replaceCount);
