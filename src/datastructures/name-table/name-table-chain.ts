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

        for (let i = 0; i < this.tableSize; i++) {
            this.data[i] = new SingleLnkedList<HashElement<string, V>>();
        }
    }

    private hashKey(key: string): number {
        // converts the hashcode into positive number and takes mode of the table size
        return this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;
    }

    private resize(tableSize: number): void {
        const harray = new Array(tableSize);

        for (let i = 0; i < tableSize; i++) {
            harray[i] = new SingleLnkedList<HashElement<string, V>>();
        }

        this.tableSize = tableSize;

        for (let i = 0; i < this.data.length; i++) {
            for (const item of this.data[i]) {
                const key = item.getKey();
                const hash = this.hashKey(key);
                const newItem = new HashElement(key, item.getValue());

                harray[hash].addFirst(newItem);
            }
        }

        this.data = harray;
    }

    public put(key: string, val: V): void {
        if (this.loadFactore() > this.maxLoadFactore) {
            this.resize(this.tableSize * 2);
        }

        const item = new HashElement(key, val);
        const hash = this.hashKey(key);

        this.data[hash].addFirst(item);
        this.numElements++;
    }

    public get(key: string): V | undefined {
        const hash = this.hashKey(key);

        for (const item of this.data[hash]) {
            if (item.getKey() === key) {
                return item.getValue();
            }
        }

        return undefined;
    }

    public delete(key: string): V | undefined {
        const index = this.findListItemIndex(key);

        if (index === -1) {
            return undefined;
        }

        const hash = this.hashKey(key);
        const item = this.data[hash].removeByIndex(index);

        this.numElements--;

        return item?.getValue();
    }

    private findListItemIndex(key: string): number {
        const hash = this.hashKey(key);

        let index = -1;
        let current = 0;

        for (const item of this.data[hash]) {
            if (item?.getKey() === key) {
                index = current;

                break;
            }

            current++;
        }

        return index;
    }

    public loadFactore(): number {
        return this.numElements / this.tableSize;
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