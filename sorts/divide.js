"use strict";

function arrayMerge(a1, a2) {
    let a3 = [],
        i = 0,
        j = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            a3.push(a1[i]);
            i++;
        } else {
            a3.push(a2[j]);
            j++;
        }
    }

    if (i >= a1.length) {
        a3 = a3.concat(a2.slice(j));
    } else {
        a3 = a3.concat(a1.slice(i));
    }

    return a3;
}

function divideSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let a1 = arr.slice(0, Math.ceil(arr.length/2)),
        a2 = arr.slice(Math.ceil(arr.length/2));

    return arrayMerge(divideSort(a1), divideSort(a2));
}

console.log(divideSort([9,8,7,6,5,4,3,2,1,0]));