
export class HeapMax {
    private items: number[];
    private count: number;

    constructor() {
        this.items = [NaN];
        this.count = 0;
    }

    private swim(current: number): void {
        let parent = Math.floor(current/2);

        while (current > 1 && this.items[current] > this.items[parent]) {
            this.exchange(parent, current);

            current = Math.floor(current/2);
            parent = Math.floor(current/2);
        }
    }

    private sink(current: number): void {
        let child;

        while (current * 2 <= this.count) {
            child = current * 2;

            if (this.items[child] < this.items[child+1]) {
                child++;
            }

            if (this.items[current] > this.items[child]) {
                break;
            }

            this.exchange(child, current);
            current = child;
        }
    }

    private exchange(first: number, second: number): void {
        [this.items[first], this.items[second]] = [this.items[second], this.items[first]];
    }

    public insert(item: number): void {
        this.items[++this.count] = item;
        this.swim(this.count);
    }

    public delete(): number|null {
        if (this.isEmpty()) {
            return null;
        }

        const max = this.items[1];

        this.exchange(1, this.count--);
        this.sink(1);
        this.items.pop();

        return max;
    }

    public isEmpty(): boolean {
        return 0 === this.count;
    }
}
