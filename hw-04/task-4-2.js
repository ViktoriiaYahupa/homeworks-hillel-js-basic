let num = +prompt("Введіть ціле число");

for (let k = 1; k <= num; k++) {
    let sum = 0;

    for (let i = 1; i < k; i++) {
        if (k % i === 0) {
            sum = sum + i;
        }
    }
    if (k === sum) {
        console.log(k + " досконале число");
    }
}