
export class HeapMax {
    private items: number[];
    private lastPosition: number;

    constructor() {
        this.items = [];
        this.lastPosition = -1;
    }

    private swim(position: number): void {
        if (position === 0) {
            return;
        }

        const parent = Math.floor((position-1)/2);

        if (this.items[position] > this.items[parent]) {
            this.exchange(parent, position);
            this.swim(parent);
        }
    }

    private sink(parent: number): void {
        const left = 2 * parent + 1;
        const right = 2 * parent + 2;

        if (left > this.lastPosition) {
            return;
        }

        let child = left;

        if (right <= this.lastPosition && this.items[right] > this.items[left]) {
            child = right;
        }

        if (this.items[child] <= this.items[parent]) {
            return;
        }

        this.exchange(parent, child);
        this.sink(child);
    }

    private exchange(first: number, second: number): void {
        [this.items[first], this.items[second]] = [this.items[second], this.items[first]];
    }

    public insert(item: number): void {
        this.items[++this.lastPosition] = item;
        this.swim(this.lastPosition);
    }

    public delete(): number|null {
        if (this.lastPosition === -1) {
            return null;
        }

        const item = this.items[0];

        this.exchange(0, this.lastPosition--);
        this.sink(0);
        this.items.pop();

        return item;
    }
}
