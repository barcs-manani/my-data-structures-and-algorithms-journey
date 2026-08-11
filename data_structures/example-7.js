// Stack - Linked List Version

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // See top node
    peek () {
        console.log(this.top);
        return this.top;
    }

    // add node to top of stack
    push(value) {
        const newNode = new Node(value);
        if (this.top) 
            newNode.next = this.top;
        else
            this.bottom = newNode;
        this.top = newNode;
        this.length++;
        return this;
    }

    // remove node from top of stack
    pop() {
        if (!this.top) return null;
        const newTop = this.top.next;
        this.top = newTop;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop();

console.log("My Stack: ", myStack);