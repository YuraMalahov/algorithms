
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

export class LnkedList<T> {
    private first: Node<T>|null = null;
    private last: Node<T>|null = null;
    private size = 0;

    public addFirst(value: T): void {
        const node = new Node<T>(value);

        node.setNext(this.first);
        this.first = node;

        if (this.last === null) {
            this.last === node;
        }

        this.size++;
    }

    public addLast(value: T): void {
        const node = new Node<T>(value);

        if (this.first === null) {
            this.first = node;
            this.last = node;
            this.size++;

            return;
        }

        this.last?.setNext(node);
        this.last = node;

        this.size++;
    }

    public length(): number {
        return this.size;
    }
}
