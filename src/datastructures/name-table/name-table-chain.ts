import { HashCode } from './hash-code';
import { SingleLnkedList } from '../linked-list/single-linked-list';
import { HashElement } from './hash-element';

export class NameTableChain<V> {
    private hashCode: HashCode;
    private data: Array<SingleLnkedList<HashElement<string, V>>>;
    private tableSize: number;
    private maxLoadFactore: number;
    private numElements: number;

    constructor(tableSize: number, maxLoadFactore = 0.75) {
        this.tableSize = tableSize;
        this.maxLoadFactore = maxLoadFactore;
        this.numElements = 0;
        this.hashCode = new HashCode();
        this.data = new Array(this.tableSize);
        this.data.fill(new SingleLnkedList<HashElement<string, V>>());
    }

    private hashKey(key: string): number {
        // converts the hashcode into positive number and takes mode of the table size
        return this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;
    }

    public put(key: string, val: V): void {
        const hash = this.hashKey(key);

        this.data[hash].addFirst(new HashElement(key, val));
    }

    public get(key: string): V | undefined {
        const hash = this.hashKey(key);

        if (!this.data[hash].length()) {
            return undefined;
        }

        for (const item of this.data[hash]) {
            if (item.getKey() === key) {
                return item.getValue();
            }
        }

        return undefined;
    }

    public loadFactore(): number {
        return this.numElements / this.tableSize;
    }

    public find(key: string) {

    }

    public delete(key: string) {
    }

    public contains(key: string) {
    }

    public isEmpty() {
    }

    public size() {}

    [Symbol.iterator] = function () {
        return {
            next() {

            }
        };
    }
}