import { Node } from './node/node';

export class Tree<T> {
    private root: Node<T>|null = null;
    private size = 0;

    public add(value: T): void {
        const node = new Node<T>(value);

        if (this.root === null) {
            this.root = node;
            this.size++;

            return;
        }
 
        this.push(this.root, node);
    }

    public has(value: T): boolean {
        return this.exists(this.root, value);
    }

    private push(parent: Node<T>, child: Node<T>): void {
        if (child.value > parent.value) {
            if (parent.right === null) {
                parent.right = child;
                child.parent = parent;
                this.size++;
            } else {
                this.push(parent.right as Node<T>, child);
            }
        } else {
            if (parent.left === null) {
                parent.left = child;
                child.parent = parent;
                this.size++;
            } else {
                this.push(parent.left as Node<T>, child);
            }
        }

        this.checkBalance(child);
    }

    private checkBalance(node: Node<T>): void {
        if (Math.abs(this.hight(node.left) - this.hight(node.right)) > 1) {
            this.rebalance(node);
        }

        if (node.parent == null) {
            return;
        }

        this.checkBalance(node.parent);
    }

    private hight(node: Node<T> | null): number {
        if (!node) {
            return 0;
        }

        const left = this.hight(node.left);
        const right = this.hight(node.right);

        return 1 + Math.max(left, right);
    }

    private rebalance(node: Node<T>): void {
        if (this.hight(node.left) - this.hight(node.right) > 1) {
            if (this.hight(node.left?.left) > this.hight(node.left?.right)) {
                node = this.rightRotation(node);
            } else {
                node = this.leftRightRotation(node);
            }
        } else {
            if (this.hight(node.right?.right) > this.hight(node.right?.left)) {
                node = this.leftRotation(node);
            } else {
                node = this.rightLeftRotation(node);
            }
        }

        if (node.parent == null) {
            this.root = node;
        }
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