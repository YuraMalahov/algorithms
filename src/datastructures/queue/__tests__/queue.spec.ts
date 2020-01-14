import { Queue } from '../queue';

describe('Queue', () => {
    describe('queue of numbers', () => {
        const queue = new Queue<number>();

        test('queue is empty', () => {
            expect(queue.isEmpty()).toEqual(true);
        });

        test('enqueue data', () => {
            queue.enqueue(0);
            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.isEmpty()).toEqual(false);
        });

        test('dequeue data', () => {
            expect(queue.dequeue()).toEqual(0);
            expect(queue.dequeue()).toEqual(1);
            expect(queue.dequeue()).toEqual(2);

            expect(queue.isEmpty()).toEqual(true);
        });
    });
});
