"use strict";

var a = ['AGXHK', '39X7F', 'NCQ03', 'NB67R', 'DUMRN', '5UATT', 'OXIX5', 'NAZ00',
    '27QEW', 'HTIGQ'
],
    aux = [],
    R = 256,
    W = 5,
    N = a.length;

for (let d = W - 1; d >= 0; d--) {
    let count = new Array(R).fill(0, 0, R);

    for (let i = 0; i < N; i++) {
        count[a[i].charCodeAt(d) + 1]++;
    }

    for (let r = 0; r < R-1; r++) {
        count[r + 1] += count[r];
    }

    for (let i = 0; i < N; i++) {
        aux[count[a[i].charCodeAt(d)]++] = a[i];
    }

    a = aux.slice();
}

console.log(a);

