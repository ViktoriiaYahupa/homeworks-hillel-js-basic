const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(array1, array2) {
    const commonElements = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j] && !commonElements.includes(array1[i])) {
                commonElements.push(array1[i])
            }
        }
    };

    return commonElements;
};

console.log('array 1 >', array1);
console.log('array 2 >', array2);

console.log('спільні елементи >', findCommonElements(array1, array2));

