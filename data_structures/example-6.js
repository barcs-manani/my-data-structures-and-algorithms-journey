// Doubly Linked Lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    forward_lookup(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse_lookup(neg_index) {
        let counter = this.length - 1;
        let currentNode = this.tail;
        while (counter !== neg_index) {
            currentNode = currentNode.prev;
            counter--;
        }
        return currentNode;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
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
            return this.printList();
        }
        else if (!index || index > (this.length - 1)) {
            this.append(value);
            return this.printList();
        }
        else {
            const newNode = new Node(value);
            const leaderNode = this.forward_lookup(index - 1);
            const followerNode = leaderNode.next;
            leaderNode.next = newNode;
            newNode.prev = leaderNode;
            newNode.next = followerNode;
            followerNode.prev = newNode;
            this.length++;
            return this.printList();
        }
    }

    remove(index) {
        if (typeof index !== "number") {
            console.error("ValueError: Invalid index data type;")
            throw new Error("ValueError: Invalid index data type;");
        }

        const leaderNode = this.forward_lookup(index);
        if (index === this.length - 1 || leaderNode.next === null) {
            const last = leaderNode.prev;
            last.next = null
            this.tail = last;
        } else {
            const removalNode = leaderNode.next;
            const replaceNode = removalNode.next;
            replaceNode.prev = leaderNode;
            leaderNode.next = replaceNode;
        }

        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(10);
myLinkedList.append(16)
myLinkedList.prepend(1);
myLinkedList.insert(2, 9);
myLinkedList.insert(4, 12);
myLinkedList.remove(5);
console.log("Full list: ", myLinkedList);