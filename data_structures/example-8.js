// Stack with arrays

// class Stack{
//     constructor () {
//         this.array = new Array();
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     peek() {
//         console.log("Peek: ", this.top);
//         return this.top;
//     }

//     push (value) {
//         this.array.push(value);
//         if (this.length === 0)
//             this.bottom = value
//         this.top = value;
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.top) return null;
//         if (this.top === this.bottom)
//             this.bottom = null;
//         this.top = this.array[this.length - 2];
//         this.length--;
//         return this.array.pop();
//     }
// }

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        const top = this.array[this.array.length - 1];
        return top;
    }

    push (value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
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