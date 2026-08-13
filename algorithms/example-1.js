// ZTM Recursive

function findFactorialRecursive(number) {
    if (number <= 1) return 1;
    return findFactorialRecursive(number - 1) * number;
}

function findFactorialIterative(number) {
    let prod = 1; // O(1)
    let num = number; // O(1)
    while(num !== 1) { // O(number)
        prod *= num; // O(number)
        num--; // O(number)
    }
    return prod // O(1)
}

console.log("Recursive: ", findFactorialRecursive(5));
console.log("Iterative: ", findFactorialIterative(5));