import { HashCode } from "./hash-code";

export class NameTable {
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

    private hashKey(key: string): number {
        // converts the hashcode into positive number and takes mode of the table size
        return this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;
    }

    public put(key: string, val: any) {
        const hash = this.hashKey(key);
        
        this.keys[hash] = key;
        this.values[hash] = val;
    }
    
    public get(key: string): any {
        const hash = this.hashKey(key);

        if (this.keys[hash] !== key) {
            return undefined;
        }

        return this.values[hash];
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