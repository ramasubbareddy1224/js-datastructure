class Node {
    constructor(value = '') {
        this.children = {};
        this.data = value;
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i].toLowerCase();
            if (!node.children[char]) {
                node.children[char] = new Node(char);
            }
            node = node.children[char];

        }
        node.isEndOfWord = true;
    }

    isWordExist(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i].toLowerCase();

            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    isWordStartsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i].toLowerCase();
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    search(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char.toLowerCase()]) {
                return [];
            }
            node = node.children[char.toLowerCase()];
        }
        return this.findSuggestions(node, prefix);
    }

    findSuggestions(node, prefix) {
        let suggestions = [];
        if (node.isEndOfWord) {
            suggestions.push(prefix);
        }

        // Recursively traverse on all children nodes
        for (let char in node.children) {
            suggestions = suggestions.concat(this.findSuggestions(node.children[char.toLocaleLowerCase()], prefix + char));
        }

        return suggestions;
    }

}

const trie = new Trie();
trie.insert("cat");
trie.insert("dog");
trie.insert("do");

const dsa = [
    "Searching Algorithm",
    "Alg Sorting Algorithm",
    "Greedy Algorithms",
    "Alg Backtracking Algorithm",
];
dsa.forEach((title) => trie.insert(title));

console.log("search cat ", trie.isWordExist("cat"))
console.log("search ca", trie.isWordStartsWith("ca"))
console.log("search catt", trie.isWordExist("catt"))
console.log("search do ", trie.isWordExist("do"))
console.log("get suggestions", trie.search("alg"))







