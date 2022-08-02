
export class QuickUnion {
    private ids: number[] = [];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
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

        this.ids[firstRoot] = secondRoot;

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
        let index = searched;

        while (index !== this.ids[index]) {
            index = this.ids[index];
        }

        return index;
    }
}
