import { NameTable } from '../name-table';

describe('NameTable', () => {
    describe('name table', () => {
        const nameTable = new NameTable(10);

        test('exist', () => {
            nameTable.put('abc', 23);

            expect(nameTable.get('abc')).toEqual(23);
        });

        test('not exist', () => {
            expect(nameTable.get('cba')).toEqual(undefined);
        });

    });
});
