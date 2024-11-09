/*  [data|next]--> [data|next] --> [data|null] 
       |
       |
      HEAD  
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let lastNode = this.head;
            // loop until find last node is null
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        this.length++;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            // loop until previous node index
            let findNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                findNode = findNode.next;
            }
            node.next = findNode.next;
            findNode.next = node;
            this.length++;
        }
    }

    remove(index) {
        let deleteNode;
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            deleteNode = this.head;
            this.head = this.head.next;
        } else {
            // loop until previous node index
            let prevNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next;
            }
            deleteNode = prevNode.next;
            prevNode.next = deleteNode.next;
        }
        this.length--;
        return deleteNode.value;
    }

    print() {
        let s = " ";
        let current = this.head;
        while (current) {
            s += current.value + " ";
            current = current.next;
        }
        return s;
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let cur = this.head;
        while (cur) {
            if (cur.value === value) {
                return i;
            }
            cur = cur.next;
            i++;
        }
        return -1;
    }

    // insert(value) {
    //     if (this.head === null) {
    //         const node = new Node(value);
    //         this.head = node;
    //     } else {
    //         while
    //     }
    // }
}
const list = new LinkedList();
console.log("size", list.size());
console.log("print", list.print());
list.prepend(10);
list.prepend(20);
console.log("size", list.size());
console.log("print", list.print());
list.append(30)
list.append(40)
console.log("print", list.print());
console.log("size", list.size());

list.insert(50, 0);
list.insert(60, 2);
console.log("print", list.print());
console.log("size", list.size());
list.remove(5); // 40 should delete
console.log("print", list.print());
console.log("size", list.size());
list.remove(2); // 60 should delete
console.log("print", list.print());
console.log("size", list.size());
console.log("search", list.search(20));

// console.log("size", stack.size());
// console.log("print", stack.print());
// console.log("peek", stack.peek());
// console.log("print", stack.print());