import { Stack } from '../stack';

describe('Stack', () => {
    describe('stack of strings', () => {
        const stack = new Stack<string>();

        test('stack is empty', () => {
            const isEmpty = stack.isEmpty();

            expect(isEmpty).toEqual(true);
        });

        test('push data', () => {
            stack.push('a');
            stack.push('b');
            stack.push('c');
        });

        test('stack is not empty', () => {
            const isEmpty = stack.isEmpty();

            expect(isEmpty).toEqual(false);
        });

        test('pop data', () => {
            const c = stack.pop();
            const b = stack.pop();
            const a = stack.pop();

            expect(c).toEqual('c');
            expect(b).toEqual('b');
            expect(a).toEqual('a');
        });

        test('stack is empty', () => {
            const isEmpty = stack.isEmpty();

            expect(isEmpty).toEqual(true);
        });
    });
});
