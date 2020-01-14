
class Node<T> {
    private value: T;
    private next: Node<T>|null = null;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public setNext(next: Node<T>|null): void {
        this.next = next;
    }

    public getNext(): Node<T>|null {
        return this.next;
    }
}

export class Bag<T> implements Iterable<T> {
    private size = 0;
    private first: Node<T>|null = null;

    public [Symbol.iterator](): Iterator<T> {
        let current = this.first;

        return {
            next(): IteratorResult<T> {
                if (current) {
                    const value = current.getValue();

                    current = current.getNext();

                    return {
                        value: value,
                        done: false
                    };
                }

                return {
                    value: null,
                    done: true
                };
            }
        };
    }

    public toArray(): T[] {
        const array = [];
        let current = this.first;

        while (current) {
            array.push(current.getValue());

            current = current.getNext();
        }

        return array;
    }

    public add(value: T): void {
        const oldFirst = this.first;

        this.first = new Node<T>(value);
        this.first.setNext(oldFirst);
        this.size++;
    }

    public length(): number {
        return this.size;
    }
}
