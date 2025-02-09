let userInput = prompt("Введіть перелік даних масиву, розділяючи їх комами :");

const originalNumbersArray = userInput.split(",");
console.log('original numbers array > ', originalNumbersArray);

const primeNumbers = originalNumbersArray.filter(number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
});

console.log('prime numbers > ', primeNumbers);