"use strict";

function sort(array, lowest, highest) {
    if (highest <= lowest) {
        return;
    }

    let lt = lowest,
        gt = highest,
        compare = array[lowest],
        i = lowest,
        iCompare;

    while (i <= gt) {
        iCompare = array[i];
        if (iCompare < compare) {
            [array[lt], array[i]] = [iCompare, array[lt]];
            i++;
            lt++;
        } else if (iCompare > compare) {
            [array[gt], array[i]] = [iCompare, array[gt]];
            gt--;
        } else {
            i++;
        }
    }

    sort(array, lowest, lt - 1);
    sort(array, gt + 1, highest);
}

var a = [2,3,1,5,9,4,0,8,6,7];
sort(a, 0, a.length-1);
console.log(a);
