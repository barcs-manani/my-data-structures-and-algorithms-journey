function reverseString(sentence) {
    if (!sentence || sentence.length < 2 || typeof sentence !== 'string') {
        console.log("Invalid input!");
        return "Invalid input";
    }
    let newString = ''; // O(1)
    let sentenceLen = sentence.length; // O(1)
    for (let i = 0; i <= sentenceLen - 1; i++) { // O(1)
        newString += sentence[sentenceLen - i - 1]; // O(n)
    }
    console.log("New string: ", newString);
    return newString;
};

reverseString('This is my reverse string logic');