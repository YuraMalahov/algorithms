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

    public remove(value: T): boolean {
        const node = this.find(this.root, value);

        if (!node) {
            return false;
        }

        this.delete(node);

        return true;
    }

    public has(value: T): boolean {
        const node = this.find(this.root, value);

        if (node === null) {
            return false;
        }

        return true;
    }

    public travers(travers: Traversal<T>): void {
        travers.visit(this.root);
    }

    private push(parent: Node<T>, child: Node<T>): void {
        if (child.value > parent.value) {
            if (parent.right === null) {
                parent.right = child;
                child.parent = parent;

                return;
            }

            this.push(parent.right as Node<T>, child);

            return;
        }

        if (parent.left === null) {
            parent.left = child;
            child.parent = parent;

            return;
        }

        this.push(parent.left as Node<T>, child);
    }

    private find(node: Node<T>|null, value: T): Node<T>|null {
        if (node === null) {
            return null;
        }

        if (node.value === value) {
            return node;
        }

        if (value > node.value) {
            return this.find(node.right, value);
        }

        return this.find(node.left, value);
    }

    private delete(node: Node<T>): void {
        const parent = node.parent;

        if (parent === null) {
            if (this.root?.left === null && this.root?.right === null) {
                this.root = null;

                return;
            }

            if (this.root?.left === null && this.root.right) {
                this.root.right.parent = null;
                this.root = this.root.right;

                return;
            }

            this.replace(this.root as Node<T>);
            (this.root as Node<T>).parent = null;

            return;
        }

        if (node.left === null && node.right === null) {
            this.set(parent, node, null);

            return;
        }

        if (node.left === null) {
            this.set(parent, node, node.right);

            return;
        }

        this.replace(node);
    }

    private set(position: Node<T>, compare: Node<T>, node: Node<T>|null): void {
        if (position.left === compare) {
            position.left = node;

            return;
        }

        position.right = node;
    }

    private replace(node: Node<T>): void {
        if (!node.left) {
            throw new Error('set node error');
        }

        const replacemant = this.findMax(node.left);
        const left = replacemant.left;

        replacemant.left = node.left;
        replacemant.right = node.right;

        if (!node.parent) {
            this.root = replacemant;
        } else if (node.parent.left === node) {
            node.parent.left = replacemant;
        } else {
            node.parent.right = replacemant;
        }

        if (!replacemant.parent) {
            return;
        }

        if (replacemant.parent.left === replacemant) {
            replacemant.parent.left = left;
        } else {
            replacemant.parent.right = left;
        }
    }

    private findMin(node: Node<T>): Node<T> {
        if (node.left === null) {
            return node;
        }

        return this.findMin(node.left);
    }

    private findMax(node: Node<T>): Node<T> {
        if (node.right === null) {
            return node;
        }

        return this.findMax(node.right);
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