import { Tree } from '../tree';
import { PreOrderTraversal } from '../traversal/pre-order';
import { InOrderTraversal } from '../traversal/in-order';
import { PostOrderTraversal } from '../traversal/post-order';
import { LevelOrderTraversal } from '../traversal/level-order';

describe('Tree', () => {
    describe('Tree', () => {
        const tree = new Tree<number>();

        test('equal', () => {
            tree.add(20);
            tree.add(10);
            tree.add(30);
            tree.add(15);
            tree.add(25);
            tree.add(5);
            tree.add(35);

            const root = Reflect.get(tree, 'root');

            expect(root.value).toEqual(20);
            expect(root.left.value).toEqual(10);
            expect(root.right.value).toEqual(30);
            expect(root.left.left.value).toEqual(5);
            expect(root.left.right.value).toEqual(15);
            expect(root.right.left.value).toEqual(25);
            expect(root.right.right.value).toEqual(35);
        });

        test('pre-order', () => {
            const travers = new PreOrderTraversal<number>();

            tree.travers(travers);

            expect(travers.get()).toEqual([20, 10, 5, 15, 30, 25, 35]);
        });
        
        test('in-order', () => {
            const travers = new InOrderTraversal<number>();

            tree.travers(travers);

            expect(travers.get()).toEqual([5, 10, 15, 20, 25, 30, 35]);
        });

        test('post-order', () => {
            const travers = new PostOrderTraversal<number>();

            tree.travers(travers);

            expect(travers.get()).toEqual([5, 15, 10, 25, 35, 30, 20]);
        });

        test('level-order', () => {
            const travers = new LevelOrderTraversal<number>();

            tree.travers(travers);

            expect(travers.get()).toEqual([20, 10, 30, 5, 15, 25, 35]);
        });
    });
});
