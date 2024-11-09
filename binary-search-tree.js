class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        console.log(this.root)
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    // value --> left tree --> right tree
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // left tree --> value --> right tree
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    // left tree -->  right tree --> value
    postOrder(root) {
        if (root) {
            this.inOrder(root.left);
            this.inOrder(root.right);
            console.log(root.value);
        }
    }

    //breadth first search can be implemented using queue 
    bfs() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let cur = queue.shift();
            console.log(cur.value);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }

    // traverse left most leaf node
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // traverse right most leaf node
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    height(node) {
        if (!node) {
            return 0;
        } else {
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
}
const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(20);
bst.insert(10);
bst.insert(35);
bst.insert(5);
bst.insert(45);
console.log("is 35 exist", bst.search(bst.root, 35));
console.log("is 25 exist", bst.search(bst.root, 25));
console.log("preOrder");
bst.preOrder(bst.root);
console.log("inOrder");
bst.inOrder(bst.root);
console.log("postOrder");
bst.postOrder(bst.root);
console.log("bfs travel")
bst.bfs();
console.log("min value", bst.min(bst.root));
console.log("max value", bst.max(bst.root));
bst.delete(10);
console.log("bfs travel")
bst.bfs();
console.log("height of the tree",bst.height(bst.root))

