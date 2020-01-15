
export class QuickUnion {
    private ids: number[] = [];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
    }

    public union(first: number, second: number): boolean {
        const firstRoot = this.root(first);
        const secondRoot = this.root(second);

        if (firstRoot === secondRoot) {
            return false;
        }

        this.ids[firstRoot] = secondRoot;

        return true;
    }

    public connected(first: number, second: number): boolean {
        return this.root(first) === this.root(second);
    }

    private root(searched: number): number {
        while (searched !== this.ids[searched]) {
            searched = this.ids[searched];
        }

        return searched;
    }
}
