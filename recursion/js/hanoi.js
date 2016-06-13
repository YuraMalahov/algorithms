"use strict";

function hanoi(number, src, dst, hlp) {
    if (number === 1) {
        dst.push(src.pop());
        return;
    }

    hanoi(number-1, src, hlp, dst);
    dst.push(src.pop());
    hanoi(number-1, hlp, dst, src);
}

var a=[9,8,7,6,5,4,3,2,1,0], b=[], c=[];

hanoi(10, a,b,c);

console.log(a,b,c);
