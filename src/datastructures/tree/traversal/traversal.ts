/*
if node === null return

print node.value
visit node.left
visit node.right


if node === null return

visit node.left
print node.value
visit node.right


if node === null return

visit node.left
visit node.right
print node.value


visit()
	node = root

	while node !== null
		print node.value
		if node.left !== null
			queue.push(node.left)
		if node.right !== null
			queue.push(node.right)
		node = queue.pop()

*/

import { Node } from '../node/node';

export interface Traversal<T> {
    visit(node: Node<T> | null): void;
    get(): Array<T>;
}
