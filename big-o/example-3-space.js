// Big O
// Space complexity

function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooooo!');
    }
}

booooo([1, 2, 3, 4, 5]);
// Only one cause of space complexity, variable allocation: let i = 0 
// Big O notation = O(1)


function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);
// Two causes of space allocation:
// 1. Variable allocation: let i = 0 - O(1),
// 2. Data structures: hiArray[i] added item on every iteration - O(n)
// O(1 + n)
// Big O notation (considering worst case and removing constants) = O(n)