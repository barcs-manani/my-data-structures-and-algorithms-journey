class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    lookup(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    printList() {
        const listArray = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("List Array: ", listArray);
        return listArray;
    }

    insert(index, value) {
        if (typeof index !== "number") {
            console.error("ValueError: Invalid index data type;")
            throw new Error("ValueError: Invalid index data type;");
        }
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        else if (!index || index > (this.length - 1)) {
            this.append(value);
            return this;
        }
        else {
            const newNode = new Node(value);
            const leaderNode = this.lookup(index - 1);
            const followerNode = leaderNode.next;
            leaderNode.next = newNode;
            newNode.next = followerNode;
            this.length++;
            return this.printList();
        }
    }

    remove(index) {
        if (typeof index !== "number") {
            console.error("ValueError: Invalid index data type;")
            throw new Error("ValueError: Invalid index data type;");
        }
        const leaderNode = this.lookup(index - 1);
        const removalNode = leaderNode.next;
        leaderNode.next = removalNode.next;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(10);
myLinkedList.append(16)
myLinkedList.prepend(1);
myLinkedList.insert(2, 9);
myLinkedList.insert(3, 12);
myLinkedList.remove(4);
// console.log("Full list: ", JSON.stringify(myLinkedList));