import { UnionInterface } from './quick-union';


export interface TraverseUnionInterface {
    traverse(union: UnionInterface): void;
}

export class TraverseUnion implements TraverseUnionInterface {
    public traverse(union: UnionInterface): void {
        const table = {} as { [key: number]: number[] };
        const connections = union.getConnectionsList();

        for (let i = 0; i < connections.length; i++) {
            if (!table[connections[i]]) {
                table[connections[i]] = [];
            }

            table[connections[i]].push(i);
        }

        console.log(table);
    }
}
