"use strict";

var a = [
    'AGX',
    '39',
    '1',
    'NCQ0',
    'X4',
    'ZZ8',
    'NB67R',
    'DUMRNJ',
    'HIGQ',
    '5UTT',
    'NCQ0',
    'OXIX5',
    'Z00',
    '5UTT',
    '27QEW',
    'Z00',
    '0P',
    'HIGQ'
],
    aux = [],
    R = 256,
    M = 15,
    N = a.length;

function sort(a, lo, hi, d) {
    if (hi <= lo + M) {
        for (let i = lo; i <= hi; i++) {
            for (let j = i; j > lo && (a[j].substr(d) < a[j-1].substr(d)); j--) {
                let tmp = a[j];
                a[j] = a[j-1];
                a[j-1] = tmp;
            }
        }
        return;
    }

    let count = new Array(R+2).fill(0, 0, R+2);

    for (let i = lo; i <= hi; i++) {
        count[a[i].charCodeAt(d)+2]++;
    }

    for (let r = 0; r < R+1; r++) {
        count[r+1] += count[r];
    }

    for (let i = lo; i <= hi; i++) {
        aux[count[a[i].charCodeAt(d)+1]++] = a[i];
    }

    for (let i = lo; i <= hi; i++) {
        a[i] = aux[i-lo];
    }

    for (let r = 0; r < R; r++) {
        sort(a, lo + count[r], lo + count[r+1] -1, d + 1);
    }
}

sort(a, 0, N-1, 0);

console.log(a);

