
// Last In, First out
/* time complexity
Access: O(n)
search: O(n)
Insert: O(1)
Delete: O(1)
*/

// space complexity : O(n)

/* 
102 <-- Last In and First Out
101
100
*/

class StackArray {
    constructor() {
        this.items = [];
    }
    // Adds an element to the top of the stack.
    push(value) {
        this.items.push(value);
    }
    // Removes the top element from the stack.
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }
    // Returns the top element without removing it.
    peek() {
        if (this.items.length) {
            return this.items[this.items.length - 1];
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

const stack = new StackArray();
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


