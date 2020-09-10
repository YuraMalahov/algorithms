
import { Node } from '../node/node';
import { Traversal } from './traversal';

export class PreOrderTraversal<T> implements Traversal<T> {
    private array: Array<T>;

    constructor() {
        this.array = [];
    }

    public get(): Array<T> {
        return this.array;
    }

    public visit(node: Node<T> | null): void {
        if (node === null) {
            return;
        }

        this.array.push(node.value);

        this.visit(node.left);
        this.visit(node.right);
    }
}

