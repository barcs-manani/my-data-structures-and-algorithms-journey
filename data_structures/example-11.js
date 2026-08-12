// Binary Trees
// Binary Search Tree

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

    insert(value) {
        if (typeof value !== "number")
            throw new Error("Invalid input, input should be of type number!");

        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left)
                        currentNode = currentNode.left;
                    else {
                        currentNode.left = newNode;
                        return this;
                    }
                }
                else {
                    if (currentNode.right)
                        currentNode = currentNode.right;
                    else {
                        currentNode.right = newNode;
                        return this;
                    }
                }
            }
        }
        return this;
    }

    lookup(value) {
        if (typeof value !== "number")
            throw new Error("Invalid input, input should be of type number!");

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                console.log("Found: ", currentNode);
                return currentNode;
            }
            else if (currentNode.value < value)
                currentNode = currentNode.right;
            else
                currentNode = currentNode.left;
        }
        return null;
    }

    remove(value) { }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(20);

// console.log("Tree: ", tree);
const funcTree = JSON.stringify(traverse(tree.root));
console.log(funcTree);

function traverse(node) {
    const newTree = { value: node.value };
    newTree.left = node.left === null ? null : traverse(node.left);
    newTree.right = node.right === null ? null : traverse(node.right);
    return newTree;
}

// {
//     "value": 9,
//     "left": {
//         "value": 4,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 6,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 20,
//         "left": {
//             "value": 15,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 170,
//             "left": null,
//             "right": null
//         }
//     }
// }