let cache = new Map();

function sqr(x, cache) {

    //1)  перевіряємо, чи є в cache вже обчислений квадрат від х
    if (cache.has(x)) {
        console.log('Знаходимо в кеші вже доданий раніше квадрат числа ' + x);

        //2) повертаємо існуючий запис з cache в разі його наявності
        return cache.get(x);
    }

    //3)обчислюємо квадрат від х в разі його відсутності в cache
    console.log('Обчислюємо квадрат числа ' + x);
    const result = x * x;

    //4)записуємо в cache обчислений квадрат від х в разі його відсутності в cache
    cache.set(x, result)

    //5)повертаємо новий запис з cache
    return result;
}

console.log(sqr(2, cache));
console.log(sqr(2, cache));
console.log(sqr(3, cache));
console.log(sqr(4, cache));
console.log(sqr(5, cache));
console.log(sqr(4, cache));
console.log(sqr(3, cache));
console.log(sqr(3, cache));
