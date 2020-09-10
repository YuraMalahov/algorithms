import { Node } from './node/node';
import { Traversal } from './traversal/traversal';

export class Tree<T> {
    private root: Node<T>|null = null;
    private size = 0;

    public add(value: T): void {
        const node = new Node<T>(value);

        if (this.root === null) {
            this.root = node;
        } else {
            this.push(this.root, node);
        }

        this.size++;
    }

    public has(value: T): boolean {
        return this.exists(this.root, value);
    }

    public travers(travers: Traversal<T>): void {
        travers.visit(this.root);
    }

    private push(parent: Node<T>, child: Node<T>): void {
        if (child.value > parent.value) {
            if (parent.right === null) {
                parent.right = child;

                return;
            }

            this.push(parent.right as Node<T>, child);

            return;
        }

        if (parent.left === null) {
            parent.left = child;

            return;
        }

        this.push(parent.left as Node<T>, child);
    }

    private exists(node: Node<T>|null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        }

        if (value > node.value) {
            return this.exists(node.right, value);
        }

        return this.exists(node.left, value);
    }

    private leftRotation(node: Node<T>): Node<T> {
        const right = node.right as Node<T>;

        node.right = right.left;
        right.left = node;

        return right;
    }

    private rightRotation(node: Node<T>): Node<T> {
        const left = node.left as Node<T>;

        node.left = left.right;
        left.right = node;

        return left;
    }

    private rightLeftRotation(node: Node<T>): Node<T> {
        node.right = this.rightRotation(node.right as Node<T>);

        return this.leftRotation(node);
    }

    private leftRightRotation(node: Node<T>): Node<T> {
        node.left = this.leftRotation(node.left as Node<T>);

        return this.rightRotation(node);
    }
}