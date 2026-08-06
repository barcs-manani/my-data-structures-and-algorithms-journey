// Two arrays, integers, can be negative
// find pair that adds up to a sum
// eg [1, 2, 4, 4] => find pair that adds up to 8 and return true if found

// Brute force solution - Depends on whether the pairs are next to each other
function findPairSum(arr, sum){
    for (let i = 0; i < arr.length - 2; i++) { // O(1)
        const val1 = arr[i]; // O(n)
        if (typeof val1 !== "number") {
            throw new Error("Val 1: " + val1 + ", is not a number");
        }
        const val2 = arr[i + 1]; // O(n)
        if (typeof val2 !== "number") {
            throw new Error("Val 2: " + val2 + ", is not a number");
        }
        const newSum = val1 + val2; // O(n)
        if (sum == newSum) {
            console.log("Found pair");
            return true;
        }
    }
    console.log("No pair!");
    return false;
};

const array = [1, 4, 5, 4];
const sum = 8;
// findPairSum(array, sum);

// Space complexity = O(n)
// Time complexity = O(n)

// Say the pairs are not sorted - We need a hash table for this
function findPairSum2 (arr, sum) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        const minusVal = sum - arr[i];
        if (map[arr[i]]) {
            console.log("Values found:" + minusVal + ", " + arr[i]);
            return true;
        }
        map[minusVal] = true;
    }
    console.log("No values found!");
    return false;
}

findPairSum2(array, sum);