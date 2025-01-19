let num = +prompt("Введіть ціле число");

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
};

console.log((isPrime) ? ('Число ' + num + ' є простим числом') : ('Число ' + num + ' не є простим числом'));