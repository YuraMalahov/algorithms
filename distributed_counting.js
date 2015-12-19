"use strict";

var a = [{
    name: 'a',
    key: 2
}, {
    name: 'b',
    key: 1
},{
    name: 'c',
    key: 3
},{
    name: 'd',
    key: 2
},{
    name: 'e',
    key: 2
}, {
    name: 'f',
    key: 3
}],
    aux = [],
    count = [0, 0, 0, 0, 0],
    R = 4,
    N = a.length;

for (let i = 0; i < N; i++) {
    count[a[i].key + 1]++;
}

for (let r = 0; r < R; r++) {
    count[r + 1] += count[r];
}

console.log(count);

for (let i = 0; i < N; i++) {
    aux[count[a[i].key]++] = a[i];
}

console.log(count);
console.log(aux);
