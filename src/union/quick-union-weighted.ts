
export class QuickUnionWeighted {
    private ids: number[] = [];
    private size: number[] =[];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
            this.size[i] = 1;
        }
    }

    public union(first: number, second: number): boolean {
        const firstRoot = this.root(first);
        const secondRoot = this.root(second);

        if (firstRoot === secondRoot) {
            return false;
        }

        // attach smaller tree to bigger tree
        if (this.size[firstRoot] > this.size[secondRoot]) {
            this.ids[secondRoot] = firstRoot;
            this.size[firstRoot] += this.size[secondRoot];
        } else {
            this.ids[firstRoot] = secondRoot;
            this.size[secondRoot] += this.size[firstRoot];
        }

        return true;
    }

    public connected(first: number, second: number): boolean {
        return this.root(first) === this.root(second);
    }

    private root(searched: number): number {
        while (searched !== this.ids[searched]) {
            // falatter tree by attaching subtree to root element
            this.ids[searched] = this.ids[this.ids[searched]];
            searched = this.ids[searched];
        }

        return searched;
    }
}
