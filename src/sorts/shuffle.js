"use strict";

function shuffle(array) {
    for (let i = 1, count = array.length; i < count; i++) {
        let rand = Math.round(Math.random() * i);

        [array[rand], array[i]] = [array[i], array[rand]];
    }
}

var a = [0,1,2,3,4,5,6,7,8,9];

shuffle(a);

console.log(a);