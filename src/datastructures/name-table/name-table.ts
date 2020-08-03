import { HashCode } from "./hash-code";

class NameTable {
    private hashCode: HashCode;
    private keys: Array<string>;
    private values: Array<any>;
    private tableSize: number;

    constructor(tableSize: number) {
        this.tableSize = tableSize;
        this.hashCode = new HashCode();
        this.keys = new Array();
        this.values = new Array();
    }

    put(key: string, val: any) {
        // converts hashcode into positive and takes mode of table size
        const hash = this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;

        this.keys[hash] = key;
        this.values[hash] = val;
    }

    get(key: string): any {
        const hash = this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;

        if (this.keys[hash] !== key) {
            return null;
        }

        return this.values[hash];
    }

    find(key: string) {

    }

    delete(key: string) {
    }

    contains(key: string) {
    }

    isEmpty() {
    }

    size() {}

    [Symbol.iterator] = function () {
        return {
            next() {

            }
        };
    }
}