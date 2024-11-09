// https://www.geeksforgeeks.org/introduction-to-circular-queue/
// https://github.com/gopinav/JavaScript-Data-Structures-Tutorial/blob/master/queue-circular.js

class QueueCircular {
    constructor(capacity) {
        this.items = new Array(capacity).fill(undefined) // fixed size
        Object.seal(this.items);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.currentSize = 0;
    }
    // Adds an element to the rear of the queue.
    enqueue(value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = value;
            this.currentSize += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }
    // Removes and returns the element from the front of the queue.
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentSize -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return value;
    }
    // Returns the element at the front of the queue without removing it.
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
    size() {
        return this.currentSize;
    }
    isEmpty() {
        return this.currentSize === 0;
    }
    isFull() {
        return this.currentSize === this.capacity;
    }
    print() {
        let s = " ";
        this.items.forEach((item) => {
            s += item + " ";
        });
        return s;
    }
}

const queue = new QueueCircular(3);
console.log("size", queue.size());
console.log("print", queue.print());
queue.enqueue(10); // [10]
queue.enqueue(20); // [10,20]
queue.enqueue(30); // [10,20,30]
// queue.enqueue(40); // [10,20,30]
console.log("size", queue.size());
console.log("print", queue.print());
console.log("peek", queue.peek());
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

