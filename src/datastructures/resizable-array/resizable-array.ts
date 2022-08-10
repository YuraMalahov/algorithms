
export class ResizableArray<T> {
    private array: Array<T>;
    private current = 0;
    private length = 0;

    constructor(length: number) {
        this.array = new Array(length);
        this.length = length;
    }

    public push(value: T): void {
        if (this.current === this.length) {
            this.resize(this.length * 2);
        }

        this.array[this.current] = value;
        this.current++;
    }

    public pop(): T {
        this.current--;
        const value = this.array[this.current];
        this.array[this.current] = null as unknown as T;

        if (this.current * 4 <= this.length) {
            this.resize(this.length / 2);
        }

        return value;
    }

    public get(index: number): T {
        return this.array[index];
    }

    public size(): number {
        return this.length;
    }

    private resize(length: number): void {
        const newArray = new Array<T>(length);

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }

        this.length = length;
        this.array = newArray;
    }
}
