import { NameTableChain } from '../name-table-chain';

describe('NameTableChain', () => {
    describe('name table chain', () => {
        const nameTableChain = new NameTableChain<number>(8);

        test('exist', () => {
            nameTableChain.put('abc', 23);

            expect(nameTableChain.get('abc')).toEqual(23);
        });

        test('not exist', () => {
            expect(nameTableChain.get('cba')).toEqual(undefined);
        });

        test('colision', () => {
            nameTableChain.put('abs', 24)

            expect(nameTableChain.get('abs')).toEqual(24);
            expect(nameTableChain.get('abc')).toEqual(23);
        });

        test('delete', () => {
            expect(nameTableChain.delete('abc')).toEqual(23);
            nameTableChain.put('abc', 23);
            expect(nameTableChain.delete('abc')).toEqual(23);
        });
    });
});
