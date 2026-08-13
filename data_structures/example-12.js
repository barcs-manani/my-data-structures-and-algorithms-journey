// Sample adjacent list
// {
//     1: [3, 1],
//     2: [3, 4],
//     3: [4, 2]
// }

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        }
    }

    addEdge(node1, node2) {
        // Input validation
        if (!node1 || !node2)
            throw new Error("Invalid input, addEdge requires two inputs!");

        if (!this.adjacentList[node1])
            this.adjacentList[node1] = [node2];
        else
            this.adjacentList[node1].push(node2);

        if (!this.adjacentList[node2])
            this.adjacentList[node2] = [node1];
        else
            this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph;
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();