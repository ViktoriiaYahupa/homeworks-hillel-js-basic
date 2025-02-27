function summarize(num) {

    return function (num2) {
        if (num2 === undefined) {
            num2 = 1;
        };
        return num + num2;
    }
};

const generalSumm = summarize(5);
console.log('якщо аргумент передано: ', generalSumm(3));
console.log('якщо аргумент не передано: ', generalSumm());

