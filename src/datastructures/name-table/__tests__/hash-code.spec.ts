import { HashCode } from '../hash-code';

describe('HashCode', () => {
    describe('hash code', () => {
        const hashCode = new HashCode();

        test('equal', () => {
            expect(hashCode.hashCode('abc')).toEqual(96354);
            expect(hashCode.hashCode('cba')).toEqual(98274);
            expect(hashCode.hashCode('test')).toEqual(3556498);
        });

        test('equal is constant', () => {
            expect(hashCode.hashCode('abc')).toEqual(96354);
            expect(hashCode.hashCode('cba')).toEqual(98274);
            expect(hashCode.hashCode('test')).toEqual(3556498);
        });
    });
});
