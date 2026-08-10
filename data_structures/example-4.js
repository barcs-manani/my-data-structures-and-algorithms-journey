// given an array, find the first recurring number
// [1, 2, 3, 1, 6, 4, 8]

function findFirstRecur(array) {
    if (!array || !array.length) {
        console.error("Invalid input!");
        return false;
    }
    const lookUpSet = new Set();
    for (let i = 0; i < array.length - 1; i++) {
        if (lookUpSet.has(array[i])) {
            console.log("Ret:  ", array[i]);
            return array[i];
        } else {
            lookUpSet.add(array[i]);
        }
    }
    return undefined;
};

findFirstRecur([1, 2, 3, 1, 6, 4, 8]);