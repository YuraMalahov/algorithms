
export class HeapMax {
    private items: number[];
    private count: number;

    constructor() {
        this.items = [NaN];
        this.count = 0;
    }

    public isEmpty(): boolean {
        return 0 === this.count;
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

    private swim(current: number): void {
        let child = current;
        let parent = Math.floor(child/2);

        while (child > 1 && this.items[child] > this.items[parent]) {
            this.exchange(parent, child);

            child = Math.floor(child/2);
            parent = Math.floor(child/2);
        }
    }

    private sink(current: number): void {
        let parent = current;
        let child;

        while (parent * 2 <= this.count) {
            child = parent * 2;

            if (child+1 <= this.count && this.items[child] < this.items[child+1]) {
                child++;
            }

            if (this.items[parent] > this.items[child]) {
                break;
            }

            this.exchange(child, parent);
            parent = child;
        }
    }

    private exchange(first: number, second: number): void {
        [this.items[first], this.items[second]] = [this.items[second], this.items[first]];
    }
}
