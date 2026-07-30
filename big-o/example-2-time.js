// Big O Rule book

// Rule 1 & 2 - Worst Case, Drop Constants
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }

    return a; // O(1)
}

// Big O Notation?
// 1 + 1 + 1 + n + n + n + n
// Big O(3 + 4n) = O(n)

function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) {
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; j < input; j++) {
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
}

// Big O Notation
// Big O(4 + 5n) = O(n)


// Rule 3 - Different Terms for inputs
// Scenario 1 - Single input
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

// Big O notation for nested items is multiplication for each item
// O(n * n)
// O(n^2)

// Rule 4 - Drop Non Dominants
function printAllNumbersThenAllPairSums(numbers) {
    console.log('These are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5, 6]);

// Big O Notation
// O(n + n^2) => O(n^2)  -  the first operand is non-dominant