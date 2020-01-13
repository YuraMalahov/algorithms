
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

export class Queue<T> {
    private first: Node<T>|null = null;
    private last: Node<T>|null = null;

    public enqueue(value: T): void {
        const newLast = new Node<T>(value);

        if (this.last === null) {
            this.first = newLast;
        } else {
            this.last.setNext(newLast);
        }

        this.last = newLast;
    }

    dequeue(): T|null {
        if (this.first === null) {
            return null;
        }

        if (this.first.getNext() === null) {
            this.last = null;
        }

        const oldFirst = this.first;

        this.first = this.first.getNext();

        return oldFirst.getValue();
    }

    public isEmpty(): boolean {
        return this.first === null;
    }
}

module.exports = Queue;
