// graph can be represented using two ways
/*
      B
     |  |
    |    |
    A    C

    A  B   C
    ----------
   A|0  1  0
   B|1  0  1
   C|0  1  0

adjacency matrix --- 2D array with rows and columns
   [
    [0,1,0]
    [1,0,1]
    [0,1,0]
   ]
adjacency list --- stores in List/Map
   A-->B
   B-->A,C
   C-->B
   {
   'A' : ['B'],
   'B' : ['A','C'],
   'C' : ['B] 
   }

*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);

    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    print() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.print();
console.log("B-->A edge", graph.hasEdge("B", "A"));
console.log("C-->A edge", graph.hasEdge("C", "A"));
console.log("remove edge A,B")
// graph.removeEdge("A","B");
graph.print();
console.log("delete vertex C")
graph.removeVertex("C")
graph.print();
