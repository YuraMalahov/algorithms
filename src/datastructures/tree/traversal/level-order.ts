
import { Node } from '../node/node';
import { Traversal } from './traversal';
import { Queue } from '../../../datastructures/queue/queue';

export class LevelOrderTraversal<T> implements Traversal<T> {
    private queue: Queue<Node<T>|null>;
    private array: Array<T>;

    constructor () {
        this.queue = new Queue<Node<T>|null>();
        this.array = [];
    }

    public get(): Array<T> {
        return this.array;
    }

    public visit(node: Node<T> | null): void {
        let tmpNode = node;

        while (tmpNode !== null) {
            this.array.push(tmpNode.value);

            if (tmpNode.left !== null) {
                this.queue.enqueue(tmpNode.left);
            }

            if (tmpNode.right !== null) {
                this.queue.enqueue(tmpNode.right);
            }

            tmpNode = this.queue.dequeue();
        }
    }
}

