const array1 = [1, 2, 3, 4, 5];
console.log('array 1 >', array1);

const array2 = [3, 4, 5, 6, 7];
console.log('array 2 >', array2);

let uniqueValuesArray = [];
function uniqueValues(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            uniqueValuesArray.push(array1[i]);
        }
    };
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            uniqueValuesArray.push(array2[i]);
        }
    };
    return uniqueValuesArray;
}

console.log('unique values array >', uniqueValues(array1, array2));
