// Число всіх перестановок для масиву з n елементів дорівнює факторіалу числа n.
// Якщо масив має лише один елемент, то є лише одна перестановка — сам масив.


function allPermutations(arr) {
    const uniqueArr = [... new Set(arr)];
    //console.log('unique array >', uniqueArr);

    if (uniqueArr.length === 1) {   // термінальна гілка
        return [uniqueArr];
    }

    let result = [];

    for (let i = 0; i < uniqueArr.length; i++) {

        const currentElement = uniqueArr[i];
        const otherElements = uniqueArr.slice(0, i).concat(uniqueArr.slice(1 + i))
        const subPermutations = allPermutations(otherElements);

        for (let j = 0; j < subPermutations.length; j++) {
            const perm = subPermutations[j];
            result.push([currentElement].concat(perm))
        }
    }
    return result;
};

const arr = [1, 2, 3, 2];
console.log('original array >', arr);

const result = allPermutations(arr);
console.log('all generated permutations >', result);
