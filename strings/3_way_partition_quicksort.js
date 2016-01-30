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
    N = a.length;

function sort(a, lo, hi, d) {
    if (hi <= lo) {
        return;
    }

    let lt = lo,
        gt = hi,
        v = a[lo].charCodeAt(d) || -1,
        i = lo + 1;

    while (i <= gt) {
        let t = a[i].charCodeAt(d),
            tmp;

        if (t < v) {
            tmp = a[lt];
            a[lt++] = a[i];
            a[i++] = tmp;
        } else if (t > v) {
            tmp = a[gt];
            a[gt--] = a[i];
            a[i] = tmp;
        } else {
            i++;
        }
    }

    sort(a, lo, lt-1, d);
    if (v >= 0) {
        sort(a. lt, gt, d+1);
    }
    sort(a, gt+1, hi, d);
}

sort(a, 0, N-1, 0);

console.log(a);

