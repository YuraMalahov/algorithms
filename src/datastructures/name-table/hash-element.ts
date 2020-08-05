
export class HashElement<K, V> {
    private key: K;
    private value: V;

    public constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    public getKey(): K {
        return this.key;
    }

    public getValue(): V {
        return this.value;
    }
}
