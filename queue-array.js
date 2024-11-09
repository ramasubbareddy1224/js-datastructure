// First In, First out
/* time complexity
Access: O(n)
search: O(n)
Insert: O(1)
Delete: O(1)
*/

// space complexity : O(n)

/* 
102 
101
100 <-- First In and First Out
*/

class QueueArray {
    constructor() {
        this.items = [];
    }
    // Adds an element to the rear of the queue.
    enqueue(value) {
        this.items.push(value);     // [10,20,30]   
    }
    // Removes and returns the element from the front of the queue.
    dequeue() {
        if (this.items.length) {
            return this.items.shift(); // [20,30]   
        }
        return null;
    }
    // Returns the element at the front of the queue without removing it.
    peek() {
        if (this.items.length) {
            return this.items[0];
        }
        return null;
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        let s = " ";
        this.items.forEach((item) => {
            s += item + " ";
        });
        return s;
    }
}

const queue = new QueueArray();
console.log("size", queue.size());
queue.enqueue(10); // [10]
queue.enqueue(20); // [10,20]
queue.enqueue(30); // [10,20,30]
console.log("size", queue.size());
console.log("print", queue.print());
console.log("dequeue", queue.dequeue());
console.log("size", queue.size());
console.log("print", queue.print());
console.log("peek", queue.peek());
console.log("print", queue.print());

// more test cases
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("size", queue.size());
console.log("print", queue.print());
queue.enqueue(10);
console.log("size", queue.size());
console.log("print", queue.print());

