import { LnkedList } from '../linked-list';

describe('Queue', () => {
    describe('queue of numbers', () => {
        const queue = new LnkedList<number>();

        test('queue is empty', () => {
            expect(queue.length()).toEqual(0);
        });
    });
});
