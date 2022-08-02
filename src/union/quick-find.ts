
export class QuickFind {
    private ids: number[] = [];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
    }

    public union(first: number, second: number): boolean {
        if (this.connected(first, second)) {
            return false;
        }

        const firstValue = this.ids[first];
        const secondValue = this.ids[second];

        // go through every element and update it
        for (let i = 0, len = this.ids.length; i < len; i++) {
            if (this.ids[i] === firstValue) {
                this.ids[i] = secondValue;
            }
        }

        return true;
    }

    public connected(first: number, second: number): boolean {
        return this.ids[first] === this.ids[second];
    }
}
