"use strict";

function sort(array) {
    let count = array.length,
        step = 1,
        border = Math.floor(count / 3);

    // find optimal step  ~1/3
    while (step < border) {
        step = step * 3 + 1;
    }

    while (step >= 1) {
        for (let i = step; i < count; i++) {
            for (let j = i; j >= step && array[j] < array[j - step]; j -= step) {
                [array[j], array[j - step]] = [array[j - step], array[j]];
            }
        }
        
        if (step === 1) {
            break;
        }

        step = Math.ceil(step / 3);
    }
}
var a = [2,3,1,5,9,4,0,8,6,7];

sort(a);
console.log(a);