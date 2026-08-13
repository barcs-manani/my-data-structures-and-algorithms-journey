// Recursion - reverse string

let reverseStr = "";
function stringReverse(str) {
    if (!str.length)
        return reverseStr;
    const len = str.length;
    reverseStr+=str[len - 1];
    return stringReverse(str.slice(0, len - 1));
}

console.log(stringReverse('This is a sentence!'));