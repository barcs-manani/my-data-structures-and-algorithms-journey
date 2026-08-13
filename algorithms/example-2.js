// Fibonacci Sequence

// function fibonacciIterative(n) {
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < n; i++) {
//         const temp = a;
//         a = b;
//         b = b + temp;
//     }

//     return b;
// }

function fibonacciIterative(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n];
}

function fibonacciRecursive(n) {
    if (n < 2)
        return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log("Iterative: ", fibonacciIterative(8));
console.log("Recursive: ", fibonacciRecursive(8));