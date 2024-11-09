class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    getHash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        // this.table[this.getHash(key)] = value;
        // use sub arrays to avoid collision ex: [ [["id",10],["di",20]], [["name","rama"]] ]
        const tableIndex = this.getHash(key);
        const tableValue = this.table[tableIndex];
        if (!tableValue) {
            this.table[tableIndex] = [[key, value]];
        } else {
            const isSameKeyExist = this.table[tableIndex].find(d => d[0] === key);
            if (isSameKeyExist) {
                isSameKeyExist[1] = value;
            } else {
                this.table[tableIndex].push([key, value]);
            }
        }
    }

    get(key) {
        // return this.table[this.getHash(key)];
        const tableIndex = this.getHash(key);
        const isSameKeyExist = this.table[tableIndex]?.find(d => d[0] === key);
        if (isSameKeyExist) {
            return isSameKeyExist[1];
        }
        return undefined;
    }

    remove(key) {
        // this.table[this.getHash(key)] = undefined;
        const tableIndex = this.getHash(key);
        const isSameKeyExist = this.table[tableIndex]?.find(d => d[0] === key);
        if (isSameKeyExist) {
            isSameKeyExist[1] = undefined;
        }
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(10);
table.set("id", 10);
table.set("di", 20);
table.set("di", 30);
table.set("name", "rama");
table.set("age", 30);
table.print();
console.log("name", table.get("name"));
console.log("age", table.get("age"));
table.remove("age");
table.set("age", 40);
table.print();
