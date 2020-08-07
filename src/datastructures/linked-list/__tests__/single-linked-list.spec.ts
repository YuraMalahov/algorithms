import { SingleLnkedList } from '../single-linked-list';

describe('SingleLnkedList', () => {
    describe('linked list of numbers', () => {
        const list = new SingleLnkedList<number>();

        test('linked list is empty', () => {
            expect(list.length()).toEqual(0);
        });

        test('remove first element from empty list', () => {
            expect(list.removeFirst()).toEqual(null);
            expect(list.length()).toEqual(0);
        });

        test('remove lart element from empty list', () => {
            expect(list.removeLast()).toEqual(null);
            expect(list.length()).toEqual(0);
        });

        test('add first 0 to empty list', () => {
            list.addFirst(0);

            expect(list.length()).toEqual(1);
        });

        test('remove first element from empty list', () => {
            expect(list.removeFirst()).toEqual(0);
            expect(list.length()).toEqual(0);
        });

        test('add last 0 to empty list', () => {
            list.addLast(0);

            expect(list.length()).toEqual(1);
        });

        test('remove last element from empty list', () => {
            expect(list.removeLast()).toEqual(0);
            expect(list.length()).toEqual(0);
        });

        test('add first 0 and 1 to empty list', () => {
            list.addFirst(0);
            list.addFirst(1);

            expect(list.length()).toEqual(2);
        });

        test('remove first 0 and 1 from not empty list', () => {
            expect(list.removeFirst()).toEqual(1);
            expect(list.length()).toEqual(1);
            expect(list.removeFirst()).toEqual(0);
            expect(list.length()).toEqual(0);
        });

        test('add last 0 and 1 to empty list', () => {
            list.addLast(0);
            list.addLast(1);

            expect(list.length()).toEqual(2);
        });

        test('remove last 0 and 1 from not empty list', () => {
            expect(list.removeLast()).toEqual(1);
            expect(list.length()).toEqual(1);
            expect(list.removeLast()).toEqual(0);
            expect(list.length()).toEqual(0);
        });

        test('add first and last to empty list', () => {
            list.addFirst(1);
            expect(list.length()).toEqual(1);
            list.addLast(2);
            expect(list.length()).toEqual(2);
            list.addFirst(0);
            expect(list.length()).toEqual(3);
            list.addLast(3);
            expect(list.length()).toEqual(4);
        });

        test('remove first and last from not empty list', () => {
            expect(list.removeFirst()).toEqual(0);
            expect(list.length()).toEqual(3);
            expect(list.removeLast()).toEqual(3);
            expect(list.length()).toEqual(2);
            expect(list.removeFirst()).toEqual(1);
            expect(list.length()).toEqual(1);
            expect(list.removeLast()).toEqual(2);
            expect(list.length()).toEqual(0);
        });

        test('remove by index', () => {
            list.addFirst(1);
            expect(list.length()).toEqual(1);
            list.addLast(2);
            expect(list.length()).toEqual(2);
            list.addFirst(0);
            expect(list.length()).toEqual(3);
            list.addLast(3);
            expect(list.length()).toEqual(4);

            const item = list.removeByIndex(2);

            expect(list.length()).toEqual(3);
            expect(item).toEqual(2);
        })
    });
});
