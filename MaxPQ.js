"use strict";

class MaxPQ {
    constructor(array) {
        this.array = [null];
        this.array = this.array.concat(array);
        this.N = this.array.length - 1;
    }

    isEmpty() {
        return this.N === 0;
    }

    size() {
        return this.N;
    }

    insert(value) {
        this.array[++this.N] = value;
        this.swim(this.N);
    }

    delMax() {
        let max = this.array[1];
        this.exch(1, this.N--);
        this.array[this.N + 1] = null;
        this.sink(1)
    }

    less(i, j) {
        return this.array[i] < this.array[j];
    }

    exch(i, j) {
        let tmp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = tmp;
    }

    swim(k) {
        let tmp = Math.floor(k/2);

        while (k > 1 && this.less(tmp, k)) {
            this.exch(tmp, k);
            k = tmp;
            tmp = Math.floor(k/2);
        }
    }

    sink(k) {
        while (k*2 <= this.N) {
            let j = k*2;

            if (j < this.N && this.less(j, j+1)){
                j++;
            }
            if (!this.less(k, j)){
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }
}

var max = new MaxPQ([]);

max.insert(2);
max.insert(8);
max.insert(3);
max.insert(9);
max.delMax();
max.insert(10);

console.log(max.array);
