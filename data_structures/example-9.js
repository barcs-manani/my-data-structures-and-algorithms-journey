// Queue using Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        console.log("Peek: ", this.first);
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) 
            this.last = null;
        const nextFirst = this.first.next;
        this.first = nextFirst;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Rachel");
myQueue.enqueue("Brian");
myQueue.peek();
myQueue.dequeue();
console.log("Full queue: ", myQueue);