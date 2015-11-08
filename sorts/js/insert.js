"use strict";

var list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function insertSort(list) {
    for (let j = 1; j < list.length; j++) {
        let key = list[j],
            i = j - 1;

        while (i > -1 && list[i] > key) {
            list[i + 1] = list[i];

            i--;
        }

        list[i + 1] = key;
    }
}

function invertInsertSort(list) {
    for (let j = 1; j < list.length; j++) {
        let key = list[j],
            i = j - 1;

        while (i > -1 && list[i] < key) {
            list[i + 1] = list[i];

            i--;
        }

        list[i + 1] = key;
    }
}

function find(list, num) {
    let i = 0;

    while (list[i]) {
        if (list[i] === num) {
            return i;
        }

        i++;
    }

    return null;
}

//insertSort(list);
//invertInsertSort(list);

//console.log(list);

console.log(find(list, 99));