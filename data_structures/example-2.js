function sortNums(arr) {
    const arrLen = arr.length;
    // Sort the merged array
    let temp = [];
    for (let n = arr.length - 1; n > -1; n--) {
        let min = arr[n];
        let minIndex = n;
        for (let m = 0; m < arr.length - 1; m++) {
            if (typeof arr[m] !== "number") {
                console.log("Invalid item in merged array");
                return "Invalid item in merged array";
            }
            if (min > arr[m]) {
                minIndex = m;
                min = arr[m];
            }
        }
        arr.splice(minIndex, 1);
        temp.push(min);
    }
    console.log("Temp: ", temp);
    return temp;
};

function mergeNSort(arr1, arr2) {
    if (!arr1 && !arr2) {
        console.log("Invalid input");
        return "Invalid input";
    }
    if (arr1 && !arr2) return sortNums(arr1);
    if (arr2 && !arr1) return sortNums(arr2);
    
    let arrNew = arr1;
    const arr2Len = arr2.length;
    // Merge the two arrays
    for (let i = 0; i < arr2Len; i++) {
        arrNew.push(arr2[i]);
    }
    console.log("arrNew: ", arrNew);
    sortNums(arrNew);
};


mergeNSort([2, 4, 6, 8], [9, 2, 4, 2]);