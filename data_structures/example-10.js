// Queue using stack

class Stack {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    peek() {
        const top = this.array[this.array.length - 1];
        return top;
    }

    push(value) {
        this.array.push(value);
        this.length++;
        return this;
    }

    pop() {
        const popout = this.array.pop();
        this.length--;
        return popout;
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    unstack() {
        console.log("1: ", this.stack1);
        while (this.stack1.length > 0) {
            const last = this.stack1.pop();
            this.stack2.push(last);
        }
    }

    restack() {
        console.log("2: ", this.stack2);
        while (this.stack2.length > 0) {
            const first = this.stack2.pop();
            this.stack1.push(first);
        }
    }

    push(value) {
        if (this.stack1.length === 0) {
            this.stack1.push(value);
            return this;
        }
        this.unstack();
        this.stack1.push(value);
        this.restack();
        return this;
    }

    pop() {
        this.stack1.pop();
        return this;
    }

    peek() {
        this.stack1.peek();
        return this;
    }
}

const myQueue = new Queue();
myQueue.push("Brian");
myQueue.push("Anna");
myQueue.push("Joy")

console.log(myQueue);