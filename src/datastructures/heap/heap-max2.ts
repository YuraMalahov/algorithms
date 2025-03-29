
const ROOT = 1;

export class HeapMax {
    private items: number[];
    private count: number;

    constructor() {
        this.items = [Infinity];
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

        const max = this.items[ROOT];

        this.exchange(ROOT, this.count--);
        this.sink(ROOT);

        return max;
    }

    private swim(current: number): void {
        let child = current;
        let parent = Math.floor(child/2);

        // while parent exists and the child is greater than the parent
        while (child > ROOT && this.items[child] > this.items[parent]) {
            this.exchange(parent, child);

            // find new child
            child = Math.floor(child/2);
            // find the new parent
            parent = Math.floor(child/2);
        }
    }

    private sink(current: number): void {
        let parent = current;
        let child;

        // while child exists
        while (parent * 2 <= this.count) {
            child = parent * 2;

            // if the right child exists and is greater than the left child
            // move to the right child
            if (child+1 <= this.count && this.items[child] < this.items[child+1]) {
                child++;
            }

            // if the parent is greater than the child
            // we are done
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
