const arr = [7, 2, 4, 6, 1, 8, 5, 9, 3];

// Bubble Sort

function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
// console.log(bubbleSort(arr));


// Selection Sort

function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = array[i];
        let minIndex = i;
        for (let j = i; j < len; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            array[minIndex] = array[i];
            array[i] = min;
        }
    }
    return array;
};
// console.log(selectionSort(arr));

// My Insertion sort - The item is swapped until it's position (animation implementation)
function insertionSort(array) {
    const len = array.length;
    for (let i = 1; i < len; i++) {
        let currentIndex = i;
        for (let j = i-1; j >= 0; j--) {
            if (array[currentIndex] < array[j]) {
                const temp = array[j];
                array[j] = array[currentIndex];
                array[currentIndex] = temp;
                currentIndex = j;
            }
            else {
                break;
            }
        }
    }
    return array;
}
// console.log(insertionSort(arr));

// ZTM Insertion sort - The item is cut pasted with the nested loop checking for position
function insertionSort2(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] < array[0])
            array.unshift(array.splice(i, 1)[0]);
        else{
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j])
                    array.splice(j, 0, array.splice(i, 1)[0]);
            }
        }
    }
    return array;
}
// console.log(insertionSort2(arr));

// ChatGPT implementation - Note, the item is held as the greater blocks are moved by copying
function insertionSort3(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }

    return array;
}
// console.log(insertionSort3(arr))

// Merge sort

function merge(left, right) {
    let mergedArray = [];
    let rightCounter = 0;
    let leftCounter = 0;
    while(leftCounter < left.length && rightCounter < right.length) {
        if (left[leftCounter] > right[rightCounter]) {
            mergedArray.push(right[rightCounter]);
            rightCounter++;
        }
        else {
            mergedArray.push(left[leftCounter]);
            leftCounter++;
        }
    }
    return mergedArray.concat(left.slice(leftCounter)).concat(right.slice(rightCounter));
}

function mergeSort(array){
    if (array.length === 1)
        return array;

    const len = array.length;
    const mid = Math.floor(len/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort(arr));

// Quicksort

function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++){
        if(array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(array, right, partitionIndex);
    return partitionIndex;
}

function quickSort(array, left, right) {
    const len = array.length;
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        // Sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

console.log(quickSort(arr, 0, arr.length - 1));

// By ZTM - Actually the one that looks more like quicksort
function quickSortV2(array, left, right) {
    if (array.length <= 1) {
        return array;
    }

    let indexCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i - indexCounter] > array[right - indexCounter]) {
            array.push(array.splice(i - indexCounter, 1)[0]);
            indexCounter++;
        }
    }

    let leftArray = array.slice(left, right - indexCounter);
    let rightArray = array.slice(right - indexCounter + 1, array.length);

    return quickSort(leftArray, 0, leftArray.length - 1).concat(array[right - indexCounter]).concat(quickSort(rightArray, 0, rightArray.length - 1));
}

console.log(quickSortV2(arr, 0, arr.length - 1));