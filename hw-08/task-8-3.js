const numbers = [1, 2, 3, 4, 5];
console.log('original array >', numbers);


function analyzeArray(numbers) {
    let sum = 0;
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    const average = sum / numbers.length;

    return { sum, average, min, max };
}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }