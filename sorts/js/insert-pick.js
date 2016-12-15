"use strict";

function sort(array) {
    let len = array.length;
    
    // set min val at first position
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
        // sort by shifting bigger value to right
        for (; pick < array[j-1]; j--) {
            array[j] = array[j-1];
        }
        
        array[j] = pick;
    }
}

let a = [2, 3, 8, 9, 1, 5, 0, 6, 4, 7];
sort(a);
console.log(a);
