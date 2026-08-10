class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };

    set (key, val) {
        if (!key || !val) {
            console.error("Invalid arguments for set, must have key+value pair!");
            return false;
        }
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [key, val];
        }
    };

    get (key) {
        const address = this._hash(key);
        if (!this.data[address]) {
            console.warn("No item with the address found!");
            return false;
        }
        const currentBucket = this.data[address];
        console.log("result: ", currentBucket[1]);
        return currentBucket[1];
    };

    all () {
        console.log("All: ", this.data);
        return this.data;
    }
};

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 3000);
myHashTable.get('grapes');
myHashTable.all();