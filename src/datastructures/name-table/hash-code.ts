
export class HashCode {
    public hashCode(key: string): number {
        const primeNumber = 31;
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = primeNumber * hash + key.charCodeAt(i)
        }

        return hash;
    }
}
