class StackObject {
    constructor() {
        this.items = {};
        this.index = 0;
    }
    push(value) {
        this.items[this.index] = value;
        this.index++;
    }
    pop() {

        if (this.index === 0) {
            return null;
        }
        this.index--;
        const value = this.items[this.index];
        delete this.items[this.index];
        return value;
    }
    peek() {
        if (this.index === 0) {
            return null;
        }
        return this.items[this.index - 1];
    }
    isEmpty() {
        return this.index === 0;
    }
    size() {
        return this.index;
    }
    print() {
        let s = " ";
        Object.keys(this.items).forEach((item) => {
            s += this.items[item] + " ";
        });
        return s;
    }
}

const stack = new StackObject();
console.log("size", stack.size());
stack.push(10);
stack.push(20);
stack.push(30);
console.log("size", stack.size());
console.log("print", stack.print());
console.log("pop", stack.pop());
console.log("size", stack.size());
console.log("print", stack.print());
console.log("peek", stack.peek());
console.log("print", stack.print());
console.log("pop", stack.pop());
console.log("pop", stack.pop());
console.log("pop", stack.pop());
console.log("pop", stack.pop());
console.log("size", stack.size());
console.log("print", stack.print());
stack.push(10);
console.log("size", stack.size());
console.log("print", stack.print());

