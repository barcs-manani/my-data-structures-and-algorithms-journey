// Given 2 arrays, create a function that let's a user know (tru/false)
// whether these 2 arrays contain any common items
// For example
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i', 'x']
// should return true

// 2 parameters - arrays - no size limit, return true or false

// brute force solution
function checkEachAgainstTheOther(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
                break;
            }
        }
    }
    return false;
}

function checkEachAgainstTheOther2(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length - 1; i++) {
        const item = arr1[i];
        if (!map[item]) {
            map[item] = true;
        }
    }

    for (let j = 0; j < arr2.length - 1; j++) {
        const item = arr2[j];
        if (map[item]) {
            console.log("Exists");
            return true;
        }
    }
    console.log("Not found!");
    return false;
}

const array1 = ['s', 'w', 'y', 'z'];
const array2 = ['q', 'x', 'g', 'm'];


// Moat readable version
function checkEachAgainstTheOther3(arr1, arr2) {
    if (arr1.some(item => arr2.includes(item))) {
        console.log('Exists');
        return true;
    }
    console.log("Not found!");
    return false;
};

checkEachAgainstTheOther3(array1, array2);