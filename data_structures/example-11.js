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
        return false;
    }

    remove(value) {
        // lookup
        // get Previous
        // get current and extract - right if right and left of the right if left - best node
        // Point prev.right to best Node

        if (!this.root)
            return false;

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                if (currentNode.right === null) {
                    if (parentNode === null)
                        this.root = currentNode.left;
                    else {
                        if (currentNode.value < parentNode.value)
                            parentNode.left = currentNode.left;
                        else if (currentNode.value > parentNode.value)
                            parentNode.right = currentNode.left;
                    }
                }
                else if (currentNode.right.left === null) {
                    if (parentNode === null)
                        this.root = currentNode.left;
                    else {
                        currentNode.right.left = currentNode.left;
                        if (currentNode.value < parentNode.value)
                            parentNode.left = currentNode.right;
                        else if (currentNode.value > parentNode.value)
                            parentNode.right = currentNode.right;
                    }
                }
                else {
                    // Find right child's left most child
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if (parentNode === null)
                        this.root = leftMost;
                    else {
                        if (currentNode.value < parentNode.value)
                            parentNode.left = leftMost;
                        else if (currentNode.value > parentNode.value)
                            parentNode.right = leftMost;
                    }
                }
            }
        }
    }

    breadthFirstSearch(value) {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }

    DFSIorder() {
        return traverseInOrder(this.root, []);
    }

    DFSPreorder() {
        return traversePreOrder(this.root, []);
    }

    DFSPostorder() {
        return traversePostOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left)
        traverseInOrder(node.left, list);

    list.push(node.value);
    if (node.right)
        traverseInOrder(node.right, list);
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left)
        traversePreOrder(node.left, list);

    if (node.right)
        traversePreOrder(node.right, list);
    return list;
}

function traversePostOrder(node, list) {
    if (node.left)
        traversePostOrder(node.left, list);

    if (node.right)
        traversePostOrder(node.right, list);
    list.push(node.value);
    return list;

}

function validBST(node) {
    let currentNode = node;
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode.left) {
            if (currentNode.left.value > currentNode.value) {
                return false;
            }
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            if (currentNode.right.value < currentNode.value) {
                return false;
            }
            queue.push(currentNode.right);
        }
    }
    return true;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.lookup(20);
// console.log(tree.DFSIorder());
// console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
// console.log(tree.breadthFirstSearch(9));
// console.log(tree.breadthFirstSearchR([tree.root], []));
// console.log("Valid BST: ", validBST(tree.root));
// console.log("Tree: ", tree);
// const funcTree = JSON.stringify(traverse(tree.root));
// console.log(funcTree);

// function traverse(node) {
//     const newTree = { value: node.value };
//     newTree.left = node.left === null ? null : traverse(node.left);
//     newTree.right = node.right === null ? null : traverse(node.right);
//     return newTree;
// }

const testBST = {
    "value": 9,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 20,
        "left": {
            "value": 15,
            "left": null,
            "right": null
        },
        "right": {
            "value": 170,
            "left": null,
            "right": null
        }
    }
};

console.log("Valid BST: ", validBST(testBST));