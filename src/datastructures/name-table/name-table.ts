import { HashCode } from './hash-code';

export class NameTable<T> {
    private hashCode: HashCode;
    private keys: Array<string>;
    private values: Array<T>;
    private tableSize: number;

    constructor(tableSize: number) {
        this.tableSize = tableSize;
        this.hashCode = new HashCode();
        this.keys = [];
        this.values = [];
    }

    private hashKey(key: string): number {
        // converts the hashcode into positive number and takes mode of the table size
        return this.hashCode.hashCode(key) & 0x7fffffff % this.tableSize;
    }

    public put(key: string, val: T): void {
        const hash = this.hashKey(key);
        
        this.keys[hash] = key;
        this.values[hash] = val;
    }
    
    public get(key: string): T | undefined {
        const hash = this.hashKey(key);

        if (this.keys[hash] !== key) {
            return undefined;
        }

        return this.values[hash];
    }
}