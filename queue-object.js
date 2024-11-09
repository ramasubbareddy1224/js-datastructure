class QueueObject {
    constructor() {
        this.items = {};
        this.front = 0;
        this.index = 0;
    }
    enqueue(value) {
        this.items[this.index] = value;
        this.index++;
    }
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }
        const value = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return value;
    }
    peek() {
        if (this.index === 0) {
            return null;
        }
        return this.items[this.front];
    }
    isEmpty() {
        return this.front === this.index;
    }
    size() {
        return this.index - this.front;
    }
    print() {
        let s = " ";
        Object.keys(this.items).forEach((item) => {
            s += this.items[item] + " ";
        });
        return s;
    }
}

const queue = new QueueObject();
console.log("size", queue.size());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("size", queue.size());
console.log("print", queue.print());
console.log("dequeue", queue.dequeue());
console.log("size", queue.size());
console.log("print", queue.print());
console.log("peek", queue.peek());
console.log("print", queue.print());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("size", queue.size());
console.log("print", queue.print());
queue.enqueue(10);
console.log("size", queue.size());
console.log("print", queue.print());

