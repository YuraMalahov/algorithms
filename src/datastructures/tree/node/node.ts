export class Node<T> {
    public value: T;
    public left: Node<T>|null;
    public right: Node<T>|null;
    public parent: Node<T>|null;

    constructor (value: T, left: Node<T>|null = null, right: Node<T>|null = null, parent: Node<T>|null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}
