
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

export class Stack<T> {
    private first: Node<T>|null = null;

    public push(value: T): void {
        const node = new Node<T>(value);

        if (this.first !== null) {
            node.setNext(this.first);
        }

        this.first = node;
    }

    public pop(): T|null {
        if (this.first === null) {
            return null;
        }

        const oldFirst = this.first;
        this.first = this.first.getNext();

        return oldFirst.getValue();
    }

    public isEmpty(): boolean {
        return this.first === null;
    }
}
