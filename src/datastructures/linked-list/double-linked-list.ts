
class Node<T> {
    private value: T;
    private next: Node<T>|null = null;
    private prev: Node<T>|null = null;

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

    public setPrev(prev: Node<T>|null): void {
        this.prev = prev;
    }

    public getPrev(): Node<T>|null {
        return this.prev;
    }
}

export class DoubleLnkedList<T> {
    private first: Node<T>|null = null;
    private last: Node<T>|null = null;
    private size = 0;

    public addFirst(value: T): void {
        const node = new Node<T>(value);

        node.setNext(this.first);

        if (this.first !== null) {
            this.first.setPrev(node);
        }

        this.first = node;

        if (this.last === null) {
            this.last = node;
        }

        this.size++;
    }

    public addLast(value: T): void {
        const node = new Node<T>(value);

        if (this.last === null) {
            this.first = node;
            this.last = node;
            this.size++;

            return;
        }

        node.setPrev(this.last);
        this.last.setNext(node);
        this.last = node;

        this.size++;
    }

    public removeFirst(): T | null {
        if (this.first === null) {
            return null;
        }

        const node = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.getNext();

        if (this.first !== null) {
            this.first.setPrev(null);
        }

        this.size--;

        return node.getValue();
    }

    public removeLast(): T | null {
        if (this.last === null) {
            return null;
        }

        const node = this.last;

        if (this.first === this.last) {
            this.first = null;
        }

        this.last = this.last.getPrev();

        if (this.last !== null) {
            this.last.setNext(null);
        }

        this.size--;

        return node.getValue();
    }

    public length(): number {
        return this.size;
    }
}
