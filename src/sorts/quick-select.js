"use strict";

function partition(array, lowest, highest){
    let i = lowest,
        j = highest + 1,
        center = array[lowest];

    while (true) {
        while (array[++i] < center) {
            if (i === highest) {
                break;
            }
        }
        while (array[--j] > center) {
            if (j === lowest) {
                break;
            }
        }
        if (i >= j) {
            break;
        }

        [array[i], array[j]] = [array[j], array[i]];
    }
    [array[lowest], array[j]] = [array[j], array[lowest]];

    return j;
}

function selection(index, array) {
    let lowest = 0,
        highest = array.length - 1,
        j;

    while (highest > lowest) {
        j = partition(array, lowest, highest);
        if (j < index) {
            lowest = j + 1;
        } else if (j > index) {
            highest = j - 1;
        } else {
            return array[index];
        }
    }

    return array[index];
}

function min(array) {
    return selection(0, array);
}

function max(array) {
    return selection(array.length - 1, array);
}

console.log(min([3,6,9,8,9,6,1,4,1,7,2,3]));
console.log(max([3,6,9,8,9,6,1,4,1,7,2,3]));
console.log(selection(7, [3,6,9,8,9,6,1,4,1,7,2,3]));