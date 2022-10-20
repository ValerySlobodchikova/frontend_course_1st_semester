function deleteDublicateElements(array) {
    let elementsSet = new Set();
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (!elementsSet.has(array[i])) {
            result.push(array[i]);
            elementsSet.add(array[i]);
        }
    }
    return result;
}

console.log("1:", deleteDublicateElements([1, 2, 1, 3, 3, 4]));
console.log("1:", deleteDublicateElements(['apple', 'tomato', 'apple']));

function sumArrayElements(array) {
    let sum = array.reduce((prev, cur) => prev + cur, 0);
    return sum;
}

console.log("2:", sumArrayElements([1, 2, 1, 3, 3, 4]));

function getIntersectionOfArrays(array1, array2) {
    let intersection = array1.filter(element => array2.includes(element));
    return intersection;
}

console.log("3:", getIntersectionOfArrays([1, 2, 1, 3, 3, 4], [1, 2, 1]));
console.log("3:", getIntersectionOfArrays(['lena', 'katya', 'sergey'], ['sergey', 'lena']));

function binarySearch(element, array) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (array[middle] > element) {
            right = middle - 1;
        } else if (array[middle] < element) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log("4:", binarySearch(33, [1, 3, 5, 33, 77]))
console.log("4:", binarySearch(2, [1, 2, 3, 4, 5]))
console.log("4:", binarySearch(3, [1, 2, 3, 4, 5]))

function merge(array1, array2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            merged.push(array1[i]);
            i++;
        } else {
            merged.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        merged.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        merged.push(array2[j]);
        j++;
    }
    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, middle);
    let secondHalf = array.slice(middle);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log("5:", mergeSort([1, 111, 52, 3, 77, 13, 27, 64]))