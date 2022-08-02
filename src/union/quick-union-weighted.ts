import { UnionInterface } from './quick-union';

export class QuickUnionWeighted implements UnionInterface {
    private ids: number[] = [];
    private size: number[] =[];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
            this.size[i] = 1;
        }
    }

    /*
    connects two components
    */
    public union(first: number, second: number): boolean {
        const firstRoot = this.root(first);
        const secondRoot = this.root(second);

        if (firstRoot === secondRoot) {
            return false;
        }

        // attach the root of the small tree to the root of the bigger tree
        if (this.size[firstRoot] > this.size[secondRoot]) {
            this.ids[secondRoot] = firstRoot;
            this.size[firstRoot] += this.size[secondRoot];
        } else {
            this.ids[firstRoot] = secondRoot;
            this.size[secondRoot] += this.size[firstRoot];
        }

        return true;
    }

    /*
    check if components are connected
    */
    public connected(first: number, second: number): boolean {
        return this.root(first) === this.root(second);
    }

    /*
    find root
    */
    private root(searched: number): number {
        this.validate(searched);

        let index = searched;

        while (index !== this.ids[index]) {
            // falatter tree by attaching subtree to the grant parent element
            this.ids[index] = this.ids[this.ids[index]];
            index = this.ids[index];
        }

        return index;
    }

    private validate(searched: number): void {
        if (searched >= this.ids.length) {
            throw new Error(`input: ${searched} is bigger than union size: ${this.size}`);
        }
    }
}
