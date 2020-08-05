
class Node<T> {
    private value: T;
    private next: Node<T>|null = null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
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

export class SingleLnkedList<T> {
    private first: Node<T>|null = null;
    private size = 0;

    constructor() {
        this.first = null;
    }

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

    public addFirst(value: T): void {
        const node = new Node<T>(value);

        node.setNext(this.first);
        this.first = node;
        this.size++;
    }

    public addLast(value: T): void {
        const node = new Node<T>(value);

        if (this.first === null) {
            this.first = node;
            this.size++;

            return;
        }

        let current = this.first;

        while (current.getNext() !== null) {
            current = current.getNext() as Node<T>;
        }

        current.setNext(node);

        this.size++;
    }

    public removeFirst(): T | null {
        if (this.first === null) {
            return null;
        }

        const node = this.first;

        this.first = this.first.getNext();
        this.size--;

        return node.getValue();
    }

    public removeLast(): T | null {
        if (this.first === null) {
            return null;
        }

        if (this.first.getNext() === null) {
            return this.removeFirst();
        }

        let current = this.first;

        while ((current.getNext() as Node<T>).getNext() !== null) {
            current = current.getNext() as Node<T>;
        }

        const node = current.getNext() as Node<T>;

        current.setNext(null);

        this.size--;

        return node.getValue();
    }

    public length(): number {
        return this.size;
    }
}
