"use strict";

function sort(array, lowest, highest) {
    if (highest <= lowest) {
        return;
    }

    let j = partition(array, lowest, highest);
    sort(array, lowest, j-1);
    sort(array, j+1, highest);
}

function partition(array, lowest, highest){
    let i = lowest; 
    let j = highest + 1;
    let center = array[lowest];

    while (true) {
        while (array[++i] < center && i !== highest) {}
        while (array[--j] > center && j !== lowest) {}
        
        if (i >= j) {
            break;
        }

        [array[i], array[j]] = [array[j], array[i]];
    }
    [array[lowest], array[j]] = [array[j], array[lowest]];

    return j;
}

var a = [2,3,1,5,9,4,0,8,6,7];
sort(a, 0, a.length-1);
console.log(a);
